import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "./load-dist.mjs";

test("T0: semantic components export and render visible markup with JSON-LD by default", async () => {
  const mod = await importLanderReactDist();
  for (const name of ["Article", "Product", "Course", "Quiz"]) {
    assert.equal(typeof mod[name], "function", `${name} must be exported`);
  }

  const articleMarkup = renderToStaticMarkup(
    React.createElement(mod.Article, {
      title: "Prompt Delivery Studio",
      description: "Ship prompt systems.",
      body: React.createElement("p", null, "Body copy"),
    }),
  );
  assert.ok(articleMarkup.includes("application/ld+json"));
  assert.ok(articleMarkup.includes("Prompt Delivery Studio"));

  const newsMarkup = renderToStaticMarkup(
    React.createElement(mod.Article, {
      title: "Breaking Prompt Ops",
      articleType: "NewsArticle",
      body: React.createElement("p", null, "News body"),
    }),
  );
  assert.ok(newsMarkup.includes("\"@type\":\"NewsArticle\""));

  const blogMarkup = renderToStaticMarkup(
    React.createElement(mod.Article, {
      title: "Prompt Notebook",
      articleType: "BlogPosting",
      body: React.createElement("p", null, "Blog body"),
    }),
  );
  assert.ok(blogMarkup.includes("\"@type\":\"BlogPosting\""));

  const productMarkup = renderToStaticMarkup(
    React.createElement(mod.Product, {
      name: "Prompt Delivery Studio",
      description: "Operational prompt delivery.",
      price: 49,
      priceCurrency: "USD",
    }),
  );
  assert.ok(productMarkup.includes("application/ld+json"));
  assert.ok(productMarkup.includes("\"@type\":\"Product\""));
  assert.ok(productMarkup.includes(">Prompt Delivery Studio<"));
  assert.ok(productMarkup.includes("USD 49"));

  const courseMarkup = renderToStaticMarkup(
    React.createElement(mod.Course, {
      name: "Prompt Delivery 101",
      description: "Ship and measure prompts.",
      provider: { name: "MDWRK", url: "https://mdwrk.test" },
      modules: [{ title: "Module A", summary: "Foundations." }],
    }),
  );
  assert.ok(courseMarkup.includes("application/ld+json"));
  assert.ok(courseMarkup.includes("\"@type\":\"Course\""));
  assert.ok(courseMarkup.includes(">Prompt Delivery 101<"));
  assert.ok(courseMarkup.includes("Module A"));

  const quizMarkup = renderToStaticMarkup(
    React.createElement(mod.Quiz, {
      name: "Prompt QA",
      description: "Review the core concepts.",
      questions: [{ prompt: "What is latency?", answer: "Elapsed time." }],
    }),
  );
  assert.ok(quizMarkup.includes("application/ld+json"));
  assert.ok(quizMarkup.includes("\"@type\":\"Quiz\""));
  assert.ok(quizMarkup.includes(">Prompt QA<"));
  assert.ok(quizMarkup.includes("What is latency?"));
  assert.ok(quizMarkup.includes("Elapsed time."));
});
