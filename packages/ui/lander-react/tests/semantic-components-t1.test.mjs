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
  assert.ok(articleMarkup.includes("lander-semantic--article"));

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
      className: "product-shell",
    }),
  );
  assert.ok(productMarkup.includes("Featured"));
  assert.ok(productMarkup.includes("Usage-based billing"));
  assert.ok(productMarkup.includes("Buy now"));
  assert.ok(productMarkup.includes("Product body"));
  assert.ok(productMarkup.includes("\"url\":\"https://override.test/buy\""));
  assert.ok(productMarkup.includes(">Prompt Delivery Studio<"));
  assert.ok(productMarkup.includes("Brand: MDWRK"));
  assert.ok(productMarkup.includes("class=\"lander-semantic lander-semantic--product product-shell\""));

  const courseMarkup = renderToStaticMarkup(
    React.createElement(mod.Course, {
      name: "Prompt Delivery 101",
      description: "Ship prompts with confidence.",
      provider: { name: "MDWRK", url: "https://mdwrk.test/provider" },
      duration: "4 weeks",
      educationalLevel: "Beginner",
      modules: [{ title: "Module A", summary: "Foundations." }],
      viewModel: {
        eyebrow: "Academy",
        outcomes: ["Ship prompts", "Measure outcomes"],
        footer: React.createElement("span", null, "Course footer"),
      },
      structuredDataOverrides: {
        provider: { url: "https://override.test/provider" },
      },
      className: "course-shell",
    }),
  );
  assert.ok(courseMarkup.includes("Academy"));
  assert.ok(courseMarkup.includes("Provider: MDWRK"));
  assert.ok(courseMarkup.includes("Duration: 4 weeks"));
  assert.ok(courseMarkup.includes("Level: Beginner"));
  assert.ok(courseMarkup.includes("Module A"));
  assert.ok(courseMarkup.includes("Ship prompts"));
  assert.ok(courseMarkup.includes("Course footer"));
  assert.ok(courseMarkup.includes("\"url\":\"https://override.test/provider\""));
  assert.ok(courseMarkup.includes(">Prompt Delivery 101<"));
  assert.ok(courseMarkup.includes("class=\"lander-semantic lander-semantic--course course-shell\""));

  const quizMarkup = renderToStaticMarkup(
    React.createElement(mod.Quiz, {
      name: "Prompt QA",
      description: "Review core concepts.",
      questions: [{ prompt: "What is latency?", answer: "Elapsed time.", alternatives: ["A timeout"] }],
      viewModel: {
        intro: React.createElement("p", null, "Start here"),
        outro: React.createElement("p", null, "Finished"),
      },
      structuredDataOverrides: {
        hasPart: [{ acceptedAnswer: { text: "Override answer" } }],
      },
      className: "quiz-shell",
    }),
  );
  assert.ok(quizMarkup.includes("application/ld+json"));
  assert.ok(quizMarkup.includes("Start here"));
  assert.ok(quizMarkup.includes("Finished"));
  assert.ok(quizMarkup.includes("What is latency?"));
  assert.ok(quizMarkup.includes("Elapsed time."));
  assert.ok(quizMarkup.includes("A timeout"));
  assert.ok(quizMarkup.includes("\"text\":\"Override answer\""));
  assert.ok(quizMarkup.includes("class=\"lander-semantic lander-semantic--quiz quiz-shell\""));

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
