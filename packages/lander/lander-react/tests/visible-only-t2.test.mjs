import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "./load-dist.mjs";

const site = {
  product: {
    name: "MdWrk",
    slug: "mdwrk",
    tagline: "Local-first Markdown workspace",
    description: "MdWrk is a local-first Markdown workspace with reusable lander packages.",
    category: "ProductivityApplication",
    canonicalUrl: "https://mdwrk.test",
    logo: { src: "https://mdwrk.test/favicon.svg", alt: "MdWrk logo" },
    sameAs: ["https://github.com/groupsum/mdwrk-pages"],
  },
  pages: [],
  pageByPath: new Map(),
  diagnostics: [],
  seo: {
    defaultImage: { src: "https://mdwrk.test/og.png", alt: "MdWrk preview image", width: 1200, height: 630 },
  },
};

const page = {
  kind: "compare",
  slug: "/compare/runtime/",
  path: "/compare/runtime/",
  title: "Runtime Comparison | MdWrk",
  description: "A deterministic visible renderer regression page.",
  h1: "Runtime Comparison",
  intro: "Visible rendering stays stable while structured data is delegated.",
  canonicalUrl: "https://mdwrk.test/compare/runtime/",
  breadcrumbs: [
    { label: "MdWrk", href: "/" },
    { label: "Compare", href: "/compare/" },
    { label: "Runtime", href: "/compare/runtime/" },
  ],
  internalLinks: [],
  wordCount: 180,
  sections: [
    {
      id: "overview",
      kind: "comparison",
      title: "Boundary split",
      columns: [{ id: "before", label: "Before" }, { id: "after", label: "After" }],
      rows: [{ id: "owner", label: "Owner", cells: { before: "lander-react", after: "lander-react-structured-data" } }],
    },
    {
      id: "cta",
      kind: "cta",
      title: "Keep the renderer thin",
      body: "Visible UI remains in the visible package.",
      primaryCta: { label: "Docs", href: "/docs/" },
    },
  ],
  faq: [],
  seo: {
    keywords: ["renderer", "boundary"],
    image: { src: "https://mdwrk.test/runtime.png", alt: "Runtime comparison screenshot" },
  },
  schema: [{ kind: "WebPage" }, { kind: "BreadcrumbList" }, { kind: "Article" }],
};

test("T2: repeated lander page rendering stays deterministic after the package split", async () => {
  const mod = await importLanderReactDist();
  const { LanderPage, SectionRenderer } = mod;

  const first = renderToStaticMarkup(React.createElement(LanderPage, { site, page }));
  const second = renderToStaticMarkup(React.createElement(LanderPage, { site, page }));
  assert.equal(second, first);
  assert.ok(first.includes("application/ld+json"));
  assert.ok(first.includes("Boundary split"));

  const renderedKinds = page.sections.map((section) =>
    renderToStaticMarkup(React.createElement(SectionRenderer, { section })),
  );
  assert.ok(renderedKinds.every((markup) => markup.length > 0));
});
