import assert from "node:assert/strict";
import test from "node:test";

import {
  validateStructuredDataBySchemaId,
  validateStructuredDataByType,
} from "../dist/index.js";
import { governedTypes } from "./structured-data-schema-samples.mjs";

test("T1: structured-data schema registry resolves minimal generator-conformant payloads for the full governed surface", () => {
  for (const type of governedTypes) {
    assert.deepEqual(
      validateStructuredDataByType(type, { "@type": type }),
      [],
      `${type} should accept a minimal generator-conformant payload`,
    );
  }

  const qaPageSchemaId = "urn:groupsum:schemaorg:class:QAPage";
  assert.deepEqual(validateStructuredDataBySchemaId(qaPageSchemaId, { "@type": "QAPage" }), []);
});

test("T1: structured-data schema registry rejects wrong-type and unexpected-property payloads", () => {
  for (const type of governedTypes) {
    const payload = { "@type": "Thing", unexpectedProperty: true };
    const failures = validateStructuredDataByType(type, payload);
    assert.ok(failures.length > 0, `${type} should reject a wrong-type payload`);
    assert.ok(
      failures.some((issue) => issue.path === "data.@type" || issue.path === "data.unexpectedProperty"),
      `${type} should report either an @type or unexpected-property failure`,
    );
  }
});

test("T1: primitive Schema.org wrapper fields accept direct string values without leaking exact-wrapper constraints", () => {
  const webPageFailures = validateStructuredDataByType("WebPage", {
    "@type": "WebPage",
    url: "https://mdwrk.test/page",
    isPartOf: "https://mdwrk.test",
    breadcrumb: "https://mdwrk.test/",
  });
  assert.deepEqual(webPageFailures, []);

  const readActionFailures = validateStructuredDataByType("ReadAction", {
    "@type": "ReadAction",
    target: "https://mdwrk.test/read",
  });
  assert.deepEqual(readActionFailures, []);
});

test("T1: subtype-in-parent positions and open-world cardinality validate correctly", () => {
  const productReviewFailures = validateStructuredDataByType("Product", {
    "@type": "Product",
    name: "Product",
    review: {
      "@type": "Review",
      name: "Review",
      itemReviewed: {
        "@type": "Product",
        name: "Nested product",
      },
      author: {
        "@type": "Organization",
        name: "MdWrk",
      },
      reviewBody: "Solid.",
    },
  });
  assert.deepEqual(productReviewFailures, []);

  const organizationFailures = validateStructuredDataByType("Organization", {
    "@type": "Organization",
    name: "MdWrk",
    sameAs: [
      "https://github.com/groupsum/mdwrk-pages",
      "https://mdwrk.test/about",
    ],
  });
  assert.deepEqual(organizationFailures, []);
});
