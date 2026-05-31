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
  kind: "package",
  slug: "/packages/structured-data/",
  path: "/packages/structured-data/",
  title: "Structured Data Package | MdWrk",
  description: "The structured data package emits JSON-LD nodes for lander pages.",
  h1: "Structured Data Package",
  intro: "Use this page to validate every lander structured data rich-result family.",
  canonicalUrl: "https://mdwrk.test/packages/structured-data/",
  breadcrumbs: [
    { label: "MdWrk", href: "/" },
    { label: "Packages", href: "/packages/" },
    { label: "Structured Data Package", href: "/packages/structured-data/" },
  ],
  internalLinks: [],
  wordCount: 120,
  sections: [
    {
      id: "hero",
      kind: "hero",
      title: "Structured Data Package",
      subtitle: "Portable visible renderer smoke page.",
    },
    {
      id: "install",
      kind: "markdown",
      title: "Install",
      body: "Install and use the structured data package.",
    },
    {
      id: "faq",
      kind: "faq",
      items: [{ question: "Does the lander emit JSON-LD?", answer: "Yes, via the companion structured-data renderer package." }],
    },
  ],
  faq: [{ question: "Does the lander emit JSON-LD?", answer: "Yes, visible FAQ content is mirrored into FAQPage JSON-LD." }],
  seo: {
    keywords: ["structured-data", "json-ld"],
    image: { src: "https://mdwrk.test/package.png", alt: "Structured data package screenshot" },
  },
  schema: [{ kind: "WebPage" }, { kind: "Organization" }, { kind: "WebSite" }, { kind: "FAQPage" }, { kind: "BreadcrumbList" }],
};

test("T1: visible lander-react components render without exporting structured-data wrappers", async () => {
  const mod = await importLanderReactDist();
  const { BreadcrumbList, FAQPage, SectionRenderer, LanderPage } = mod;

  const breadcrumbsMarkup = renderToStaticMarkup(React.createElement(BreadcrumbList, { items: page.breadcrumbs }));
  assert.ok(breadcrumbsMarkup.includes("application/ld+json"));
  assert.ok(breadcrumbsMarkup.includes("Structured Data Package"));

  const faqMarkup = renderToStaticMarkup(React.createElement(FAQPage, { items: page.faq }));
  assert.ok(faqMarkup.includes("Frequently Asked Questions"));
  assert.ok(faqMarkup.includes("Does the lander emit JSON-LD?"));

  const sectionMarkup = renderToStaticMarkup(React.createElement(SectionRenderer, { section: page.sections[1] }));
  assert.ok(sectionMarkup.includes("Install"));
  assert.ok(sectionMarkup.includes("Install and use the structured data package."));

  const fullMarkup = renderToStaticMarkup(React.createElement(LanderPage, { site, page }));
  assert.ok(fullMarkup.includes("application/ld+json"));
  assert.ok(fullMarkup.includes("Structured Data Package"));
  assert.ok(fullMarkup.includes("lander-page__hero"));
});
