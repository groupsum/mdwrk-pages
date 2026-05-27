import assert from "node:assert/strict";
import test from "node:test";

import { validateStructuredDataIntentStrict } from "../dist/index.js";

test("T1: strict structured-data intent validation accepts schema-backed valid payloads", () => {
  assert.deepEqual(validateStructuredDataIntentStrict({
    kind: "Article",
    data: {
      name: "Article",
      url: "https://mdwrk.test/article",
      headline: "Headline",
    },
  }), []);

  assert.deepEqual(validateStructuredDataIntentStrict({
    kind: "Quiz",
    data: {
      name: "Quiz",
      hasPart: [
        {
          name: "Q?",
          acceptedAnswer: { text: "A." },
        },
      ],
    },
  }), []);
});

test("T1: strict structured-data intent validation surfaces schema-derived failures", () => {
  const failures = validateStructuredDataIntentStrict({
    kind: "VideoObject",
    data: { name: "Video only" },
  });

  assert.ok(failures.some((failure) => failure.includes("data.thumbnailUrl")));
  assert.ok(failures.some((failure) => failure.includes("data.uploadDate")));
});
