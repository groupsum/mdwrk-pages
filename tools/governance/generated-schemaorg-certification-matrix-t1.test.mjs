import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..", "..");

const rootPackage = JSON.parse(readFileSync(path.join(repoRoot, "package.json"), "utf8"));
const demoPackage = JSON.parse(readFileSync(path.join(repoRoot, "examples", "semantic-components-demo", "package.json"), "utf8"));
const landerReactPackage = JSON.parse(readFileSync(path.join(repoRoot, "packages", "ui", "lander-react", "package.json"), "utf8"));
const tokensPackage = JSON.parse(readFileSync(path.join(repoRoot, "packages", "ui", "pages-ui-tokens", "package.json"), "utf8"));
const wrapperPackage = JSON.parse(readFileSync(path.join(repoRoot, "packages", "machine", "lander-react-structured-data", "package.json"), "utf8"));
const builderPackage = JSON.parse(readFileSync(path.join(repoRoot, "packages", "contracts", "structured-data", "package.json"), "utf8"));

test("T1: generated Schema.org certification gates wire the package-local proof rails into build and test scripts", () => {
  assert.ok(rootPackage.scripts["ci:governance"].includes("generated-schemaorg-certification-matrix-t0.test.mjs"));
  assert.ok(rootPackage.scripts["ci:governance"].includes("generated-schemaorg-certification-matrix-t1.test.mjs"));

  assert.ok(builderPackage.scripts.test.includes("generated-page-family-builders-t0.test.mjs"));
  assert.ok(builderPackage.scripts.test.includes("generated-page-family-builders-t1.test.mjs"));

  assert.ok(wrapperPackage.scripts.test.includes("generated-page-family-wrappers-t0.test.mjs"));
  assert.ok(wrapperPackage.scripts.test.includes("generated-page-family-wrappers-t1.test.mjs"));

  assert.ok(landerReactPackage.scripts.test.includes("generated-schemaorg-types-full-field-certification-t0.test.mjs"));
  assert.ok(landerReactPackage.scripts.test.includes("generated-schemaorg-types-full-field-certification-t1.test.mjs"));
  assert.ok(landerReactPackage.scripts.test.includes("generated-schemaorg-properties-full-field-certification-t0.test.mjs"));
  assert.ok(landerReactPackage.scripts.test.includes("generated-schemaorg-properties-full-field-certification-t1.test.mjs"));
  assert.ok(landerReactPackage.scripts.test.includes("generated-schemaorg-enumerations-full-field-certification-t0.test.mjs"));
  assert.ok(landerReactPackage.scripts.test.includes("generated-schemaorg-enumerations-full-field-certification-t1.test.mjs"));
  assert.ok(landerReactPackage.scripts.test.includes("generated-schemaorg-datatypes-full-field-certification-t0.test.mjs"));
  assert.ok(landerReactPackage.scripts.test.includes("generated-schemaorg-datatypes-full-field-certification-t1.test.mjs"));

  assert.ok(tokensPackage.scripts.test.includes("generated-schemaorg-token-coverage-t0.test.mjs"));
  assert.ok(tokensPackage.scripts.test.includes("generated-schemaorg-token-coverage-t1.test.mjs"));

  assert.ok(demoPackage.scripts.test.includes("generated-schemaorg-schema-derived-demo-payloads-t0.test.mjs"));
  assert.ok(demoPackage.scripts.test.includes("generated-schemaorg-schema-derived-demo-payloads-t1.test.mjs"));
  assert.ok(demoPackage.scripts.test.includes("generated-schemaorg-demo-discoverability-t0.test.mjs"));
  assert.ok(demoPackage.scripts.test.includes("generated-schemaorg-demo-filter-integrity-t1.test.mjs"));
});
