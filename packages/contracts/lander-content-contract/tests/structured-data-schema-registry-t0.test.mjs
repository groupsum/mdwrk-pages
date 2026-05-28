import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import {
  getStructuredDataSchemaBySchemaId,
  getStructuredDataSchemaByType,
  listStructuredDataSchemas,
} from "../dist/index.js";
import { governedTypes } from "./structured-data-schema-samples.mjs";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("T0: structured-data schema registry publishes the governed phase-1 surface", () => {
  const registry = listStructuredDataSchemas();
  const types = registry.map((entry) => entry.type);

  assert.equal(registry.length, governedTypes.length);
  assert.deepEqual([...types].sort(), [...governedTypes].sort());
  assert.ok(getStructuredDataSchemaByType("Dataset"));
  assert.ok(getStructuredDataSchemaByType("FAQPage"));
});

test("T0: structured-data schema registry entries are stable, frozen, and asset-backed", () => {
  const registry = listStructuredDataSchemas();

  assert.ok(Object.isFrozen(registry));
  for (const entry of registry) {
    assert.ok(Object.isFrozen(entry), `${entry.type} entry should be frozen`);
    assert.ok(Object.isFrozen(entry.schema), `${entry.type} schema should be frozen`);
    assert.ok(entry.schemaId.startsWith("https://schemas.mdwrk.com/structured-data/"));
    assert.ok(entry.assetPath.startsWith("./schemas/structured-data/"));
    assert.equal(getStructuredDataSchemaBySchemaId(entry.schemaId)?.type, entry.type);

    const assetPath = path.join(packageRoot, entry.assetPath.replace(/^\.\//, "").replaceAll("/", path.sep));
    assert.ok(existsSync(assetPath), `Expected schema asset for ${entry.type} at ${entry.assetPath}`);
    const assetJson = JSON.parse(readFileSync(assetPath, "utf8"));
    assert.deepEqual(assetJson, entry.schema, `${entry.type} asset should match registry schema`);
  }
});
