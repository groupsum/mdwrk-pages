import assert from "node:assert/strict";
import test from "node:test";

import { buildJsonLdGraph, stableId } from "../dist/index.js";

const site = { product: { name: "Example", canonicalUrl: "https://example.test" } };
const page = {
  title: "Example",
  h1: "Example",
  canonicalUrl: "https://example.test/page",
  breadcrumbs: [{ label: "Home", href: "/" }],
};

test("T1: explicit entities append deterministically and duplicate @id values are ignored", () => {
  const id = stableId("https://example.test", "software");
  const entity = { "@type": "SoftwareApplication", "@id": id, name: "Example" };
  const graph = buildJsonLdGraph(site, page, { entities: [entity, { ...entity, name: "Duplicate" }] });
  assert.equal(graph.filter((entry) => entry["@id"] === id).length, 1);
  assert.equal(graph.at(-1).name, "Example");
});

