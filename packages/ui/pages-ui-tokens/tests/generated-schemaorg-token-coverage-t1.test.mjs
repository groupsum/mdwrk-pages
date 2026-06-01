import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

import * as tokenExports from "../dist/index.js";
import { semanticTokenFixtures } from "./semantic-token-fixtures.mjs";

const generatedBundleCss = readFileSync(resolve("src/styles/generated-semantic-surface.css"), "utf8");

test("T1: generated semantic token exports and bundle imports are complete for the promoted surface", () => {
  for (const fixture of semanticTokenFixtures) {
    const tokenNames = tokenExports[fixture.tokenConstExportName];
    assert.ok(Array.isArray(tokenNames) && tokenNames.length === 6, `missing token export ${fixture.tokenConstExportName}`);
    assert.ok(generatedBundleCss.includes(`@import "./${fixture.cssFilename}";`), `generated token bundle should import ${fixture.cssFilename}`);
  }
});
