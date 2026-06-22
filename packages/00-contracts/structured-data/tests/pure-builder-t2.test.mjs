import assert from "node:assert/strict";
import test from "node:test";

import { buildJsonLdGraph } from "../dist/index.js";

const product = Object.freeze({
  name: "Deterministic Example",
  slug: "deterministic-example",
  tagline: "Stable outputs",
  description: "A fixture that proves repeatable JSON-LD graph generation.",
  category: "Software",
  canonicalUrl: "https://example.test/deterministic",
  logo: Object.freeze({ src: "https://example.test/logo.png" }),
});

const page = Object.freeze({
  kind: "blog",
  slug: "/blog/deterministic",
  title: "Deterministic Example",
  description: "A long enough description for article-style JSON-LD generation.",
  h1: "Deterministic Example",
  canonicalUrl: "https://example.test/blog/deterministic",
  breadcrumbs: Object.freeze([{ label: "Home", href: "/" }]),
  faq: Object.freeze([{ question: "Is this deterministic?", answer: "Yes." }]),
  datePublished: "2026-05-23",
});

test("T2: graph generation is deterministic across repeated runs", () => {
  const first = buildJsonLdGraph({ product }, page);
  const second = buildJsonLdGraph({ product }, page);
  assert.deepEqual(second, first);
  assert.equal(JSON.stringify(second), JSON.stringify(first));
});

test("T2: graph generation does not mutate frozen author inputs", () => {
  const beforeProduct = JSON.stringify(product);
  const beforePage = JSON.stringify(page);

  const graph = buildJsonLdGraph({ product }, page);

  assert.ok(graph.length > 0, "Expected graph output");
  assert.equal(JSON.stringify(product), beforeProduct);
  assert.equal(JSON.stringify(page), beforePage);
});

test("T2: graph output is fully JSON-serializable and rehydratable", () => {
  const graph = buildJsonLdGraph({ product }, page);
  const serialized = JSON.stringify(graph);
  const parsed = JSON.parse(serialized);

  assert.deepEqual(parsed, graph);
  assert.ok(parsed.some((entry) => entry["@type"] === "WebPage"));
  assert.ok(parsed.some((entry) => entry["@type"] === "BlogPosting"));
  assert.ok(parsed.some((entry) => entry["@type"] === "FAQPage"));
});
