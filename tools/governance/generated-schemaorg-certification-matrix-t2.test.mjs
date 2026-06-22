import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS } from "../../packages/00-contracts/lander-content-contract/dist/generated-schemaorg-page-family-metadata.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..", "..");

const rootPackage = JSON.parse(readFileSync(path.join(repoRoot, "package.json"), "utf8"));
const demoPackage = JSON.parse(readFileSync(path.join(repoRoot, "examples", "semantic-components-demo", "package.json"), "utf8"));
const landerReactPackage = JSON.parse(readFileSync(path.join(repoRoot, "packages", "ui", "lander-react", "package.json"), "utf8"));
const tokensPackage = JSON.parse(readFileSync(path.join(repoRoot, "packages", "ui", "pages-ui-tokens", "package.json"), "utf8"));
const wrapperPackage = JSON.parse(readFileSync(path.join(repoRoot, "packages", "machine", "lander-react-structured-data", "package.json"), "utf8"));
const builderPackage = JSON.parse(readFileSync(path.join(repoRoot, "packages", "contracts", "structured-data", "package.json"), "utf8"));
const matrixDoc = readFileSync(path.join(repoRoot, "docs", "structured-data-semantic-component-matrix.md"), "utf8");

test("T2: generated Schema.org certification gates include package-local T2 rails and matrix counts stay synchronized", () => {
  assert.ok(rootPackage.scripts["ci:governance"].includes("generated-schemaorg-certification-matrix-t2.test.mjs"));

  assert.ok(builderPackage.scripts.test.includes("generated-page-family-builders-t2.test.mjs"));
  assert.ok(wrapperPackage.scripts.test.includes("generated-page-family-wrappers-t2.test.mjs"));

  assert.ok(landerReactPackage.scripts.test.includes("generated-schemaorg-types-full-field-certification-t2.test.mjs"));
  assert.ok(landerReactPackage.scripts.test.includes("generated-schemaorg-properties-full-field-certification-t2.test.mjs"));
  assert.ok(landerReactPackage.scripts.test.includes("generated-schemaorg-enumerations-full-field-certification-t2.test.mjs"));
  assert.ok(landerReactPackage.scripts.test.includes("generated-schemaorg-datatypes-full-field-certification-t2.test.mjs"));

  assert.ok(tokensPackage.scripts.test.includes("generated-schemaorg-token-coverage-t2.test.mjs"));

  assert.ok(demoPackage.scripts.test.includes("generated-schemaorg-schema-derived-demo-payloads-t2.test.mjs"));
  assert.ok(demoPackage.scripts.test.includes("generated-schemaorg-demo-discoverability-t2.test.mjs"));

  assert.ok(matrixDoc.includes(`| JSON Schema | ${GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS.total} / ${GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS.total} |`));
  assert.ok(matrixDoc.includes(`- types: ${GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS.types}`));
  assert.ok(matrixDoc.includes(`- properties: ${GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS.properties}`));
  assert.ok(matrixDoc.includes(`- enumerations: ${GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS.enumerations}`));
  assert.ok(matrixDoc.includes(`- datatypes: ${GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS.datatypes}`));
});
