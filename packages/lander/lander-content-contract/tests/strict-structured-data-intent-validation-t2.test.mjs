import assert from "node:assert/strict";
import test from "node:test";

import { validateStructuredDataIntentStrict } from "../dist/index.js";

test("T2: strict structured-data intent validation is deterministic and non-mutating for schema-backed kinds", () => {
  const payload = Object.freeze({ name: "Video only" });
  const before = JSON.stringify(payload);

  const first = validateStructuredDataIntentStrict({ kind: "VideoObject", data: payload });
  const second = validateStructuredDataIntentStrict({ kind: "VideoObject", data: payload });

  assert.equal(JSON.stringify(payload), before);
  assert.deepEqual(second, first);
});

test("T2: strict structured-data intent validation degrades gracefully when no data or no schema exists", () => {
  assert.deepEqual(validateStructuredDataIntentStrict({ kind: "Article" }), []);
  assert.deepEqual(validateStructuredDataIntentStrict({ kind: "Dataset", data: { name: "Dataset" } }), []);
});
