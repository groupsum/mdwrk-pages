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
  kind: "feature",
  slug: "/demo/offline-notes/",
  path: "/demo/offline-notes/",
  title: "Offline Notes",
  description: "Keep writing without losing the thread.",
  h1: "Offline Notes",
  intro: "Work without the network and sync back later.",
  canonicalUrl: "https://acme.test/demo/offline-notes/",
  breadcrumbs: [
    { label: "Acme Notebook", href: "/demo/" },
    { label: "Offline Notes", href: "/demo/offline-notes/" },
  ],
  internalLinks: [],
  wordCount: 35,
  sections: [
    {
      id: "detail",
      kind: "feature_detail",
      title: "Keep working",
      body: "Visible rendering stays deterministic while structured data is emitted separately.",
    },
  ],
  faq: [],
  seo: {
    keywords: ["offline", "notes"],
    image: { src: "https://acme.test/offline.png", alt: "Offline notes preview" },
  },
  schema: [{ kind: "WebPage" }, { kind: "TechArticle" }, { kind: "BreadcrumbList" }],
};

test("T2: split consumer rendering stays deterministic and emits no compat warnings", async () => {
  const { landerReact, structuredDataReact } = await importSplitRenderers();
  const warnings = [];
  const originalWarn = console.warn;
  console.warn = (message, ...rest) => {
    warnings.push([message, ...rest].join(" "));
  };

  try {
    const render = () =>
      renderToStaticMarkup(
        React.createElement(
          React.Fragment,
          null,
          React.createElement(structuredDataReact.LanderStructuredData, { site, page }),
          React.createElement(landerReact.VisibleLanderPage, { page }),
        ),
      );

    const first = render();
    const second = render();
    assert.equal(second, first);
    assert.ok(first.includes("application/ld+json"));
    assert.ok(first.includes("Offline Notes"));
  } finally {
    console.warn = originalWarn;
  }

  assert.deepEqual(
    warnings.filter((entry) => entry.includes("deprecated from @mdwrk/lander-react")),
    [],
  );
});
