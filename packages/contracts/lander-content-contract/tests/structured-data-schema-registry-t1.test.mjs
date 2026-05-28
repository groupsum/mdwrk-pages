import assert from "node:assert/strict";
import test from "node:test";

import {
  validateStructuredDataBySchemaId,
  validateStructuredDataByType,
} from "../dist/index.js";
import {
  governedTypes,
  invalidPayloadByType,
  validPayloadByType,
} from "./structured-data-schema-samples.mjs";

test("T1: structured-data schema registry resolves all governed valid payloads", () => {
  for (const type of governedTypes) {
    assert.deepEqual(
      validateStructuredDataByType(type, validPayloadByType[type]),
      [],
      `${type} should accept its representative valid payload`,
    );
  }

  assert.deepEqual(
    validateStructuredDataBySchemaId(
      "https://schemas.mdwrk.com/structured-data/qa-page.schema.json",
      validPayloadByType.QAPage,
    ),
    [],
  );
});

test("T1: structured-data schema registry rejects targeted invalid governed payloads", () => {
  for (const [type, { payload, path }] of Object.entries(invalidPayloadByType)) {
    const failures = validateStructuredDataByType(type, payload);
    assert.ok(failures.length > 0, `${type} should reject its invalid payload`);
    assert.ok(
      failures.some((issue) => issue.path === path),
      `${type} should report a failure for ${path}`,
    );
  }
});
