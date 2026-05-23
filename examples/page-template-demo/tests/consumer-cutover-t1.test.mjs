import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importSplitRenderers } from "./load-split-renderers.mjs";

const site = {
  product: {
    name: "Acme Notebook",
    slug: "acme-notebook",
    tagline: "A polished notebook experience for modern teams.",
    description: "A customer-facing showcase for a product site and an editorial content experience built around one connected brand.",
    category: "SoftwareApplication",
    canonicalUrl: "https://acme.test",
  },
  pages: [],
  pageByPath: new Map(),
  diagnostics: [],
  seo: {
    defaultImage: { src: "https://acme.test/og.png", alt: "Acme Notebook preview image", width: 1200, height: 630 },
  },
};

const page = {
  kind: "home",
  slug: "/demo/",
  path: "/demo/",
  title: "Acme Notebook",
  description: "A polished notebook experience for modern teams.",
  h1: "Acme Notebook",
  intro: "Explore a launch-ready product site and a content-led editorial experience built around the same brand.",
  canonicalUrl: "https://acme.test/demo/",
  breadcrumbs: [{ label: "Acme Notebook", href: "/demo/" }],
  internalLinks: [],
  wordCount: 42,
  sections: [
    {
      id: "hero",
      kind: "hero",
      title: "Acme Notebook",
      subtitle: "A polished notebook experience for modern teams.",
    },
    {
      id: "summary",
      kind: "markdown",
      title: "Experience",
      body: "Product, support, and policy pages stay connected in one experience.",
    },
  ],
  faq: [
    {
      question: "Does the split still emit JSON-LD?",
      answer: "Yes, through the dedicated structured-data renderer package.",
    },
  ],
  seo: {
    keywords: ["notebook", "demo"],
    image: { src: "https://acme.test/demo.png", alt: "Acme Notebook preview" },
  },
  schema: [
    { kind: "WebPage" },
    { kind: "Organization" },
    { kind: "WebSite" },
    { kind: "SoftwareApplication" },
    { kind: "BreadcrumbList" },
    { kind: "FAQPage" },
  ],
};

test("T1: consumer composes visible rendering and structured data through the split packages", async () => {
  const { landerReact, structuredDataReact } = await importSplitRenderers();

  const markup = renderToStaticMarkup(
    React.createElement(
      React.Fragment,
      null,
      React.createElement(structuredDataReact.LanderStructuredData, { site, page }),
      React.createElement(landerReact.VisibleLanderPage, { page }),
    ),
  );

  assert.ok(markup.includes("application/ld+json"));
  assert.ok(markup.includes("Acme Notebook"));
  assert.ok(markup.includes("lander-page__hero"));
  assert.ok(markup.includes("Does the split still emit JSON-LD?"));
  assert.equal(markup.includes("deprecated from @mdwrk/lander-react"), false);
});
