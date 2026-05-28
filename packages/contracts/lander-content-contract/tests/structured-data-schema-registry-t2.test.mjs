import assert from "node:assert/strict";
import test from "node:test";

import {
  listStructuredDataSchemas,
  validateStructuredDataByType,
} from "../dist/index.js";
import {
  governedTypes,
  invalidPayloadByType,
  validPayloadByType,
} from "./structured-data-schema-samples.mjs";

test("T2: structured-data schema registry is deterministic across repeated reads", () => {
  const first = listStructuredDataSchemas();
  const second = listStructuredDataSchemas();

  assert.equal(first, second);
  assert.deepEqual(second, first);
  assert.deepEqual(
    second.map((entry) => entry.schemaId),
    first.map((entry) => entry.schemaId),
  );
});

test("T2: structured-data schema validation does not mutate frozen valid payloads and stays stable across the governed surface", () => {
  for (const type of governedTypes) {
    const payload = Object.freeze(structuredClone(validPayloadByType[type]));
    const before = JSON.stringify(payload);
    const first = validateStructuredDataByType(type, payload);
    const second = validateStructuredDataByType(type, payload);

    assert.equal(JSON.stringify(payload), before, `${type} payload should not be mutated`);
    assert.deepEqual(second, first, `${type} validation should be deterministic`);
    assert.deepEqual(first, [], `${type} valid payload should remain valid`);
  }
});

test("T2: structured-data schema validation returns stable targeted failures for invalid payloads", () => {
  for (const [type, { payload, path }] of Object.entries(invalidPayloadByType)) {
    const frozenPayload = Object.freeze(structuredClone(payload));
    const before = JSON.stringify(frozenPayload);
    const first = validateStructuredDataByType(type, frozenPayload);
    const second = validateStructuredDataByType(type, frozenPayload);

    assert.equal(JSON.stringify(frozenPayload), before, `${type} invalid payload should not be mutated`);
    assert.deepEqual(second, first, `${type} invalid validation should be deterministic`);
    assert.ok(first.some((issue) => issue.path === path), `${type} should fail at ${path}`);
  }
});
