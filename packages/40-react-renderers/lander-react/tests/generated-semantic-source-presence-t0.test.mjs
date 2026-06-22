import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../..");
const generatedSchemaTypeRoot = path.join(
  repoRoot,
  "packages",
  "contracts",
  "lander-content-contract",
  "schemas",
  "generated-schemaorg-page-family",
  "types",
);
const generatedTypeFamilyRoot = path.join(
  repoRoot,
  "packages",
  "ui",
  "lander-react",
  "src",
  "semantic",
  "generated-type-family",
);
const generatorPath = path.join(repoRoot, "tools", "generate-schemaorg-fused-surface.mjs");
const structuredDataCorePath = path.join(repoRoot, "packages", "contracts", "structured-data", "src", "core.ts");

const specialSlugs = new Map([
  ["FAQPage", "faq-page"],
  ["QAPage", "qa-page"],
  ["URL", "url"],
]);

function parseStringArraySource(source, assignmentPattern, label) {
  const match = source.match(assignmentPattern);
  assert.ok(match, `Could not parse ${label}`);
  return [...match[1].matchAll(/"([^"]+)"/g)].map((entry) => entry[1]);
}

function toSlug(value) {
  const special = specialSlugs.get(value);
  if (special) return special;
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z0-9])/g, "$1-$2")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

test("T0: generated type-family source files are checked in before build-time regeneration", () => {
  const generatorSource = fs.readFileSync(generatorPath, "utf8");
  const coreSource = fs.readFileSync(structuredDataCorePath, "utf8");
  const legacyBespokeTypes = new Set(parseStringArraySource(
    generatorSource,
    /LEGACY_BESPOKE_TYPE_NAMES = new Set\(\[(.*?)\]\);/s,
    "LEGACY_BESPOKE_TYPE_NAMES",
  ));
  const governedTypeNames = new Set(parseStringArraySource(
    coreSource,
    /SUPPORTED_SCHEMA_ORG_TYPES = Object\.freeze\(\[(.*?)\] as const/s,
    "SUPPORTED_SCHEMA_ORG_TYPES",
  ));
  const generatedTypeNames = fs.readdirSync(generatedSchemaTypeRoot)
    .filter((name) => name.endsWith(".schema.json"))
    .map((name) => name.replace(/\.schema\.json$/u, ""));
  const expectedGeneratedOnlyTypes = generatedTypeNames
    .filter((name) => !governedTypeNames.has(name) && !legacyBespokeTypes.has(name))
    .sort((left, right) => left.localeCompare(right, "en", { sensitivity: "base" }));

  assert.ok(expectedGeneratedOnlyTypes.length > 0, "expected generated-only Schema.org type coverage");
  assert.ok(fs.existsSync(path.join(generatedTypeFamilyRoot, "index.ts")), "missing generated type-family index");
  assert.ok(fs.existsSync(path.join(generatedTypeFamilyRoot, "shared.tsx")), "missing generated type-family shared renderer");

  for (const typeName of expectedGeneratedOnlyTypes) {
    const componentPath = path.join(generatedTypeFamilyRoot, "components", `${toSlug(typeName)}.tsx`);
    assert.ok(fs.existsSync(componentPath), `missing generated type-family component for ${typeName}`);
  }
});
