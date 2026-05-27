import assert from "node:assert/strict";
import test from "node:test";

import {
  listStructuredDataSchemas,
  validateStructuredDataByType,
} from "../dist/index.js";

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

test("T2: structured-data schema validation does not mutate frozen payloads and returns stable failures", () => {
  const payload = Object.freeze({
    name: "Product",
    offers: "invalid-offer-shape",
  });

  const before = JSON.stringify(payload);
  const first = validateStructuredDataByType("Product", payload);
  const second = validateStructuredDataByType("Product", payload);

  assert.equal(JSON.stringify(payload), before);
  assert.deepEqual(second, first);
  assert.ok(first.some((issue) => issue.path === "data.offers"));
});
