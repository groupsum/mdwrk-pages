import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import {
  getStructuredDataSchemaBySchemaId,
  getStructuredDataSchemaByType,
  getStructuredDataSchemaAssetMap,
  listStructuredDataSchemas,
} from "../dist/index.js";
import { governedTypes } from "./structured-data-schema-samples.mjs";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("T0: structured-data schema registry publishes the governed type surface and the generated non-type expansion", () => {
  const registry = listStructuredDataSchemas();
  const types = registry.map((entry) => entry.type);

  assert.ok(registry.length > governedTypes.length);
  for (const type of governedTypes) {
    assert.ok(types.includes(type), `Missing governed type ${type}`);
  }
  assert.ok(getStructuredDataSchemaByType("Dataset"));
  assert.ok(getStructuredDataSchemaByType("FAQPage"));
  assert.ok(getStructuredDataSchemaByType("about"));
  assert.ok(getStructuredDataSchemaByType("ActionStatusType"));
  assert.ok(getStructuredDataSchemaByType("Boolean"));
});

test("T0: structured-data schema registry entries are stable, frozen, and asset-backed", () => {
  const registry = listStructuredDataSchemas();

  assert.ok(Object.isFrozen(registry));
  for (const entry of registry) {
    assert.ok(Object.isFrozen(entry), `${entry.type} entry should be frozen`);
    assert.ok(Object.isFrozen(entry.schema), `${entry.type} schema should be frozen`);
    assert.match(entry.schemaId, /^urn:groupsum:schemaorg:(class|property|enumeration|datatype):/u);
    assert.ok(
      entry.assetPath.startsWith("./schemas/structured-data/")
      || entry.assetPath.startsWith("./schemas/generated-schemaorg-page-family/"),
      `${entry.type} should point at a generated asset`,
    );
    assert.equal(getStructuredDataSchemaBySchemaId(entry.schemaId)?.type, entry.type);

    const assetPath = path.join(packageRoot, entry.assetPath.replace(/^\.\//, "").replaceAll("/", path.sep));
    assert.ok(existsSync(assetPath), `Expected schema asset for ${entry.type} at ${entry.assetPath}`);
    const assetJson = JSON.parse(readFileSync(assetPath, "utf8"));
    assert.deepEqual(assetJson, entry.schema, `${entry.type} asset should match registry schema`);
  }
});

test("T0: governed structured-data schemas are generator-backed and dependency-closed against the vendored full package", () => {
  const assetMap = getStructuredDataSchemaAssetMap();
  for (const type of governedTypes) {
    const entry = getStructuredDataSchemaByType(type);
    assert.ok(entry, `Missing schema entry for ${type}`);
    assert.equal(entry.schema.title, type);
    assert.ok(entry.schema.$schema.includes("json-schema.org/draft/2020-12/schema"));
    assert.ok(
      Array.isArray(entry.schema.allOf) || Object.prototype.hasOwnProperty.call(entry.schema.properties ?? {}, "@type"),
      `${type} schema must preserve generated Schema.org structure`,
    );
    assert.ok(assetMap[`generated-schemaorg-full/types/${type}.schema.json`], `Missing generated full-package asset for ${type}`);
  }
});
