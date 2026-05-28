import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "./load-dist.mjs";

test("T1: semantic props drive visible UI and JSON-LD while overrides stay emitter-only", async () => {
  const mod = await importLanderReactDist();

  const articleMarkup = renderToStaticMarkup(
    React.createElement(mod.Article, {
      title: "Prompt Delivery Studio",
      description: "Ship prompt systems.",
      author: { name: "MDWRK" },
      publishedAt: "2026-05-27",
      viewModel: { eyebrow: "Guide", bylinePrefix: "Written by", footer: React.createElement("span", null, "Footer") },
      structuredDataOverrides: { headline: "Override headline" },
      body: React.createElement("p", null, "Article body"),
    }),
  );
  assert.ok(articleMarkup.includes("Guide"));
  assert.ok(articleMarkup.includes("Written by MDWRK"));
  assert.ok(articleMarkup.includes("Article body"));
  assert.ok(articleMarkup.includes("Footer"));
  assert.ok(articleMarkup.includes("\"headline\":\"Override headline\""));
  assert.ok(articleMarkup.includes(">Prompt Delivery Studio<"));

  const productMarkup = renderToStaticMarkup(
    React.createElement(mod.Product, {
      name: "Prompt Delivery Studio",
      description: "Operational prompt delivery.",
      brand: { name: "MDWRK" },
      price: 49,
      priceCurrency: "USD",
      offersCta: { label: "Buy now", href: "/buy" },
      body: React.createElement("p", null, "Product body"),
      viewModel: { badge: "Featured", supportingText: "Usage-based billing" },
      structuredDataOverrides: { offers: { url: "https://override.test/buy" } },
    }),
  );
  assert.ok(productMarkup.includes("Featured"));
  assert.ok(productMarkup.includes("Usage-based billing"));
  assert.ok(productMarkup.includes("Buy now"));
  assert.ok(productMarkup.includes("Product body"));
  assert.ok(productMarkup.includes("\"url\":\"https://override.test/buy\""));
  assert.ok(productMarkup.includes(">Prompt Delivery Studio<"));

  const hiddenQuizMarkup = renderToStaticMarkup(
    React.createElement(mod.Quiz, {
      name: "Prompt QA",
      emitStructuredData: false,
      questions: [{ prompt: "What is latency?", answer: "Elapsed time." }],
      viewModel: { intro: React.createElement("p", null, "Start here") },
    }),
  );
  assert.equal(hiddenQuizMarkup.includes("application/ld+json"), false);
  assert.ok(hiddenQuizMarkup.includes("Start here"));
  assert.ok(hiddenQuizMarkup.includes("What is latency?"));
});

