import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "./load-dist.mjs";

test("T2: semantic components degrade cleanly and preserve required derived structured-data fields", async () => {
  const mod = await importLanderReactDist();

  const articleMarkup = renderToStaticMarkup(
    React.createElement(mod.Article, {
      title: "Prompt Delivery Studio",
      author: { name: "MDWRK", url: "https://example.test/authors/mdwrk" },
      image: ["https://example.test/hero-a.png", "https://example.test/hero-b.png"],
      structuredDataOverrides: { name: "", headline: undefined, author: { name: "", url: "" } },
      body: React.createElement("p", null, "Body"),
    }),
  );
  assert.ok(articleMarkup.includes("hero-a.png"));
  assert.ok(articleMarkup.includes("\"name\":\"Prompt Delivery Studio\""));
  assert.ok(articleMarkup.includes("\"headline\":\"Prompt Delivery Studio\""));
  assert.ok(articleMarkup.includes("\"name\":\"MDWRK\""));

  const productMarkup = renderToStaticMarkup(
    React.createElement(mod.Product, {
      name: "Prompt Delivery Studio",
      brand: { name: "MDWRK" },
      price: 49,
      priceCurrency: "USD",
      availability: "InStock",
      url: "https://example.test/product",
      structuredDataOverrides: {
        name: "",
        brand: { name: "" },
        offers: { url: "", priceCurrency: "", availability: "" },
      },
    }),
  );
  assert.ok(productMarkup.includes("\"name\":\"Prompt Delivery Studio\""));
  assert.ok(productMarkup.includes("\"name\":\"MDWRK\""));
  assert.ok(productMarkup.includes("\"url\":\"https://example.test/product\""));
  assert.ok(productMarkup.includes("\"priceCurrency\":\"USD\""));
  assert.ok(productMarkup.includes("\"availability\":\"InStock\""));
  assert.ok(productMarkup.includes(">Prompt Delivery Studio<"));

  const courseMarkup = renderToStaticMarkup(
    React.createElement(mod.Course, {
      name: "Prompt Delivery 101",
      provider: { name: "MDWRK", url: "https://example.test/provider" },
      duration: "4 weeks",
      educationalLevel: "Beginner",
      modules: [
        { title: "Module A" },
        { title: "Module B", summary: "Hands-on." },
      ],
      viewModel: { outcomes: ["Ship prompts", "Measure outcomes"] },
      structuredDataOverrides: {
        provider: { name: "", url: "" },
        hasCourseInstance: [
          { name: "", courseMode: "" },
          { name: "Extra instance", courseMode: "Advanced" },
        ],
      },
    }),
  );
  assert.ok(courseMarkup.includes("\"name\":\"MDWRK\""));
  assert.ok(courseMarkup.includes("\"url\":\"https://example.test/provider\""));
  assert.ok(courseMarkup.includes("\"name\":\"Prompt Delivery 101 instance\""));
  assert.ok(courseMarkup.includes("\"courseMode\":\"Beginner\""));
  assert.equal(courseMarkup.includes("Extra instance"), false);
  assert.ok(courseMarkup.includes("Duration: 4 weeks"));
  assert.ok(courseMarkup.includes("Module B"));
  assert.ok(courseMarkup.includes("Ship prompts"));

  const quizMarkup = renderToStaticMarkup(
    React.createElement(mod.Quiz, {
      name: "Prompt QA",
      questions: [
        { prompt: "What is latency?", answer: "Elapsed time.", alternatives: [] },
        { prompt: "What is drift?", answer: "Behavioral change.", alternatives: ["Model swap", "Context shift"] },
      ],
      structuredDataOverrides: {
        name: "",
        learningResourceType: "",
        hasPart: [
          {
            acceptedAnswer: { text: "" },
            suggestedAnswer: [{ text: "Wrong enrichment" }],
            answerCount: 99,
          },
          {
            acceptedAnswer: { text: "" },
          },
          {
            name: "Injected question",
            acceptedAnswer: { text: "Injected answer" },
          },
        ],
      },
      viewModel: { revealMode: "accordion", outro: React.createElement("p", null, "Done") },
    }),
  );
  assert.ok(quizMarkup.includes("Answer hidden. Reveal when ready."));
  assert.ok(quizMarkup.includes("Model swap"));
  assert.ok(quizMarkup.includes("\"name\":\"Prompt QA\""));
  assert.ok(quizMarkup.includes("\"text\":\"Elapsed time.\""));
  assert.ok(quizMarkup.includes("\"text\":\"Behavioral change.\""));
  assert.ok(quizMarkup.includes("\"answerCount\":1"));
  assert.ok(quizMarkup.includes("\"answerCount\":3"));
  assert.ok(quizMarkup.includes("\"learningResourceType\":\"Flashcards\""));
  assert.equal(quizMarkup.includes("Injected question"), false);
  assert.equal(quizMarkup.includes("Injected answer"), false);
  assert.equal(quizMarkup.includes("Wrong enrichment"), false);
  assert.ok(quizMarkup.includes("Done"));
});
