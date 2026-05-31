import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { semanticFixtures, semanticNames } from "./semantic-fixtures.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const semanticIndexDts = path.join(packageRoot, "dist", "semantic", "index.d.ts");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

test("T0: fused semantic components and props types are exported from the package entrypoint for all governed core kinds", () => {
  const indexDts = read(semanticIndexDts);
  for (const name of semanticNames) {
    assert.match(indexDts, new RegExp(`\\b${name}\\b`, "m"));
    assert.match(indexDts, new RegExp(`\\b${name}Props\\b`, "m"));
  }
});

test("T0: fused semantic prop contracts stay prop-native and do not expose raw structuredData or tokens", () => {
  const indexDts = read(semanticIndexDts);
  for (const fixture of semanticFixtures) {
    assert.match(indexDts, new RegExp(`\\b${fixture.name}Props\\b`, "m"));
  }
  assert.doesNotMatch(indexDts, /\btokens\?:/);
});
