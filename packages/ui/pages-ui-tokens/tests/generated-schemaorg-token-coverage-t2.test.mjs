import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { semanticTokenFixtures } from "./semantic-token-fixtures.mjs";

const testRoot = dirname(fileURLToPath(import.meta.url));
const generatedBundleCss = readFileSync(resolve(testRoot, "..", "src", "styles", "generated-semantic-surface.css"), "utf8");

test("T2: generated semantic token bundle order stays deterministic and contains no duplicate imports", () => {
  const importLines = generatedBundleCss
    .split(/\r?\n/u)
    .map((line) => line.trim())
    .filter(Boolean);

  const expectedLines = semanticTokenFixtures.map((fixture) => `@import "./${fixture.cssFilename}";`);
  assert.deepEqual(importLines, expectedLines, "generated token bundle imports should stay deterministic");
  assert.equal(new Set(importLines).size, importLines.length, "generated token bundle should not duplicate imports");
});
