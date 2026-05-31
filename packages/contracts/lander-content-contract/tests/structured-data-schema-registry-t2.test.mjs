import assert from "node:assert/strict";
import test from "node:test";

import {
  listStructuredDataSchemas,
  validateStructuredDataByType,
} from "../dist/index.js";
import { governedTypes } from "./structured-data-schema-samples.mjs";

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

test("T2: structured-data schema validation does not mutate frozen generator-conformant payloads and stays stable across the governed surface", () => {
  for (const type of governedTypes) {
    const payload = Object.freeze({ "@type": type });
    const before = JSON.stringify(payload);
    const first = validateStructuredDataByType(type, payload);
    const second = validateStructuredDataByType(type, payload);

    assert.equal(JSON.stringify(payload), before, `${type} payload should not be mutated`);
    assert.deepEqual(second, first, `${type} validation should be deterministic`);
    assert.deepEqual(first, [], `${type} minimal payload should remain valid`);
  }
});

test("T2: structured-data schema validation returns stable targeted failures for wrong-type payloads", () => {
  for (const type of governedTypes) {
    const payload = { "@type": type === "Thing" ? "XPathType" : "Thing" };
    const frozenPayload = Object.freeze(structuredClone(payload));
    const before = JSON.stringify(frozenPayload);
    const first = validateStructuredDataByType(type, frozenPayload);
    const second = validateStructuredDataByType(type, frozenPayload);

    assert.equal(JSON.stringify(frozenPayload), before, `${type} invalid payload should not be mutated`);
    assert.deepEqual(second, first, `${type} invalid validation should be deterministic`);
    assert.ok(first.some((issue) => issue.path === "data.@type"), `${type} should fail at data.@type`);
  }
});

test("T2: primitive wrapper fields reject object impostors while preserving direct primitive acceptance semantics", () => {
  const failures = validateStructuredDataByType("WebPage", {
    "@type": "WebPage",
    url: { "@type": "Thing", name: "Not a URL" },
    isPartOf: { "@type": "Thing", name: "Not a URL" },
  });

  assert.ok(
    failures.some((issue) => issue.path === "data.url"),
    "WebPage.url should fail directly when a non-URL object is provided",
  );
  assert.ok(
    failures.some((issue) => issue.path === "data.isPartOf"),
    "WebPage.isPartOf should fail directly when a non-URL/non-creative-work object is provided",
  );
});

test("T2: subtype and open-world regressions fail closed on unrelated nested types and invalid array members", () => {
  const subtypeFailures = validateStructuredDataByType("Product", {
    "@type": "Product",
    name: "Product",
    review: {
      "@type": "Organization",
      name: "Not a review",
    },
  });
  assert.ok(
    subtypeFailures.some((issue) => issue.path === "data.review.@type"),
    "Product.review should reject unrelated nested @type values",
  );

  const cardinalityFailures = validateStructuredDataByType("Organization", {
    "@type": "Organization",
    name: "MdWrk",
    sameAs: ["https://mdwrk.test/about", { "@type": "Thing", name: "Bad entry" }],
  });
  assert.ok(
    cardinalityFailures.some((issue) => issue.path === "data.sameAs[1]"),
    "Open-world array properties should report the invalid member path",
  );
});
