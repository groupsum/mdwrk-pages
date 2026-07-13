import assert from "node:assert/strict";
import test from "node:test";

import { buildJsonLdGraph } from "../dist/index.js";

test("T2: explicit graph composition is repeatable and does not mutate frozen inputs", () => {
  const site = Object.freeze({ product: Object.freeze({ name: "Example", canonicalUrl: "https://example.test" }) });
  const page = Object.freeze({
    title: "Example",
    h1: "Example",
    canonicalUrl: "https://example.test/page",
    breadcrumbs: Object.freeze([{ label: "Home", href: "/" }]),
  });
  const entity = Object.freeze({ "@type": "Product", "@id": "https://example.test/#product", name: "Example" });
  const options = Object.freeze({ entities: Object.freeze([entity]) });

  const first = buildJsonLdGraph(site, page, options);
  const second = buildJsonLdGraph(site, page, options);
  assert.deepEqual(second, first);
  assert.equal(JSON.stringify(entity), '{"@type":"Product","@id":"https://example.test/#product","name":"Example"}');
});

