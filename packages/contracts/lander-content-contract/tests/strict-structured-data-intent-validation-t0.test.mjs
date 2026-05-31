import assert from "node:assert/strict";
import test from "node:test";

import {
  validateStructuredDataIntent,
  validateStructuredDataIntentStrict,
} from "../dist/index.js";

test("T0: strict structured-data intent validation remains opt-in and preserves loose validation defaults", () => {
  assert.equal(typeof validateStructuredDataIntentStrict, "function");
  assert.deepEqual(validateStructuredDataIntent({ kind: "FAQPage", data: { name: "FAQ" } }), []);
  assert.ok(
    validateStructuredDataIntentStrict({ kind: "FAQPage", data: { name: "FAQ" } }).some((failure) =>
      failure.includes("data.@type"),
    ),
  );
  assert.deepEqual(
    validateStructuredDataIntentStrict({ kind: "Dataset", data: { "@type": "Dataset" } }),
    [],
  );
});

test("T0: strict structured-data intent validation fails closed on unsupported kinds before schema lookup", () => {
  const failures = validateStructuredDataIntentStrict({ kind: "UnsupportedType", data: {} });
  assert.equal(failures.length, 1);
  assert.match(failures[0], /unsupported structured-data intent kind/i);
});
