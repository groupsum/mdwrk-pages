import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "./load-dist.mjs";

test("T1: fused semantic className support composes with semantic props, overrides, and JSON-LD emission settings", async () => {
  const mod = await importLanderReactDist();

  const articleMarkup = renderToStaticMarkup(
    React.createElement(mod.Article, {
      title: "Prompt Delivery Studio",
      description: "Ship prompt systems.",
      author: { name: "MDWRK" },
      className: "article-shell",
      structuredDataOverrides: { headline: "Override headline" },
      body: React.createElement("p", null, "Article body"),
    }),
  );
  assert.ok(articleMarkup.includes('class="lander-semantic lander-semantic--article article-shell"'));
  assert.ok(articleMarkup.includes("\"headline\":\"Override headline\""));
  assert.ok(articleMarkup.includes(">Prompt Delivery Studio<"));

  const productMarkup = renderToStaticMarkup(
    React.createElement(mod.Product, {
      name: "Prompt Delivery Studio",
      brand: { name: "MDWRK" },
      price: 49,
      priceCurrency: "USD",
      offersCta: { label: "Buy now", href: "/buy" },
      className: "product-shell",
      structuredDataOverrides: { offers: { url: "https://override.test/buy" } },
    }),
  );
  assert.ok(productMarkup.includes('class="lander-semantic lander-semantic--product product-shell"'));
  assert.ok(productMarkup.includes("\"url\":\"https://override.test/buy\""));
  assert.ok(productMarkup.includes(">Prompt Delivery Studio<"));

  const courseMarkup = renderToStaticMarkup(
    React.createElement(mod.Course, {
      name: "Prompt Delivery 101",
      provider: { name: "MDWRK", url: "https://mdwrk.test/provider" },
      modules: [{ title: "Module A", summary: "Foundations." }],
      className: "course-shell",
      structuredDataOverrides: { provider: { url: "https://override.test/provider" } },
    }),
  );
  assert.ok(courseMarkup.includes('class="lander-semantic lander-semantic--course course-shell"'));
  assert.ok(courseMarkup.includes("\"url\":\"https://override.test/provider\""));
  assert.ok(courseMarkup.includes("Module A"));

  const hiddenQuizMarkup = renderToStaticMarkup(
    React.createElement(mod.Quiz, {
      name: "Prompt QA",
      className: "quiz-shell",
      emitStructuredData: false,
      questions: [{ prompt: "What is latency?", answer: "Elapsed time.", alternatives: ["A timeout"] }],
      structuredDataOverrides: { hasPart: [{ acceptedAnswer: { text: "Override answer" } }] },
    }),
  );
  assert.ok(hiddenQuizMarkup.includes('class="lander-semantic lander-semantic--quiz quiz-shell"'));
  assert.equal(hiddenQuizMarkup.includes("application/ld+json"), false);
  assert.ok(hiddenQuizMarkup.includes("Elapsed time."));
  assert.equal(hiddenQuizMarkup.includes("\"text\":\"Override answer\""), false);
});
