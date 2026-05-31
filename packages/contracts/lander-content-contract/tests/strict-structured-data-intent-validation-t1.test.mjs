import assert from "node:assert/strict";
import test from "node:test";

import { validateStructuredDataIntentStrict } from "../dist/index.js";

test("T1: strict structured-data intent validation accepts schema-backed valid payloads", () => {
  assert.deepEqual(validateStructuredDataIntentStrict({
    kind: "Article",
    data: {
      "@type": "Article",
    },
  }), []);

  assert.deepEqual(validateStructuredDataIntentStrict({
    kind: "Quiz",
    data: {
      "@type": "Quiz",
    },
  }), []);
});

test("T1: strict structured-data intent validation surfaces schema-derived failures", () => {
  const failures = validateStructuredDataIntentStrict({
    kind: "VideoObject",
    data: { name: "Video only" },
  });

  assert.ok(failures.some((failure) => failure.includes("data.@type")));
});
