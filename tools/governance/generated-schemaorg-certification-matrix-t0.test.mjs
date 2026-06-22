import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS, GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS } from "../../packages/00-contracts/lander-content-contract/dist/generated-schemaorg-page-family-metadata.js";
import { foundationalGeneratedProperties, foundationalGeneratedTypes } from "../../tests/generated-schemaorg-artifact-helpers.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..", "..");
const matrixPath = path.join(repoRoot, "docs", "structured-data-semantic-component-matrix.md");
const presenceCsvPath = path.join(repoRoot, "docs", "structured-data-presence.csv");
const generatedPresenceCsvPath = path.join(repoRoot, "docs", "generated-schemaorg-page-family-presence.csv");
const tokenFixturePath = path.join(repoRoot, "packages", "ui", "pages-ui-tokens", "tests", "semantic-token-fixtures.mjs");

test("T0: generated Schema.org certification artifacts and coverage counts stay aligned", async () => {
  const matrix = readFileSync(matrixPath, "utf8");
  const presenceCsv = readFileSync(presenceCsvPath, "utf8");
  const generatedPresenceCsv = readFileSync(generatedPresenceCsvPath, "utf8");
  const { semanticTokenFixtures } = await import(pathToFileUrl(tokenFixturePath));

  assert.equal(GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS.total, GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS.length);
  assert.equal(GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS.types, 232);
  assert.equal(GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS.properties, 935);
  assert.equal(GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS.enumerations, 54);
  assert.equal(GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS.datatypes, 7);

  assert.ok(matrix.includes(`| JSON Schema | ${GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS.length} / ${GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS.length} |`));
  assert.ok(matrix.includes(`| Foundational type discoverability | ${foundationalGeneratedTypes.length} / ${foundationalGeneratedTypes.length} |`));
  assert.ok(matrix.includes(`| Foundational property discoverability | ${foundationalGeneratedProperties.length} / ${foundationalGeneratedProperties.length} |`));

  for (const name of foundationalGeneratedTypes) {
    assert.ok(matrix.includes(name), `matrix should list foundational type ${name}`);
    assert.ok(generatedPresenceCsv.includes(`type,${name},`), `generated presence CSV should include type ${name}`);
  }

  for (const name of foundationalGeneratedProperties) {
    assert.ok(matrix.includes(name), `matrix should list foundational property ${name}`);
    assert.ok(generatedPresenceCsv.includes(`property,${name},`), `generated presence CSV should include property ${name}`);
  }

  assert.ok(presenceCsv.includes("Discoverable"), "presence CSV should expose the discoverability column");
  assert.ok(generatedPresenceCsv.includes("✅"), "generated presence CSV should be UTF-8 clean");
  assert.equal(semanticTokenFixtures.length, GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS.length, "token fixtures should cover the full promoted generated surface");
});

function pathToFileUrl(filePath) {
  return `file:///${filePath.replace(/\\/g, "/")}`;
}
