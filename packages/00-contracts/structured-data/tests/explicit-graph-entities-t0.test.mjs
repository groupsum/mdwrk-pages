import assert from "node:assert/strict";
import test from "node:test";

import { buildJsonLdGraph } from "../dist/index.js";

const site = { product: { name: "Example", canonicalUrl: "https://example.test" } };
const page = {
  title: "Example",
  h1: "Example",
  canonicalUrl: "https://example.test/page",
  breadcrumbs: [{ label: "Home", href: "/" }],
};

test("T0: default graphs contain defensible identity nodes without inferred software", () => {
  const graph = buildJsonLdGraph(site, page);
  assert.deepEqual(
    graph.map((entry) => entry["@type"]),
    ["Organization", "WebSite", "WebPage", "BreadcrumbList"],
  );
  assert.equal(graph.some((entry) => entry["@type"] === "SoftwareApplication"), false);
});

