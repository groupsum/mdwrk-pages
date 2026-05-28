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
      image: ["https://example.test/hero-a.png", "https://example.test/hero-b.png"],
      structuredDataOverrides: { name: "", headline: undefined },
      body: React.createElement("p", null, "Body"),
    }),
  );
  assert.ok(articleMarkup.includes("hero-a.png"));
  assert.ok(articleMarkup.includes("\"name\":\"Prompt Delivery Studio\""));
  assert.ok(articleMarkup.includes("\"headline\":\"Prompt Delivery Studio\""));

  const productMarkup = renderToStaticMarkup(
    React.createElement(mod.Product, {
      name: "Prompt Delivery Studio",
      structuredDataOverrides: { name: "", offers: {} },
    }),
  );
  assert.ok(productMarkup.includes("\"name\":\"Prompt Delivery Studio\""));
  assert.ok(productMarkup.includes(">Prompt Delivery Studio<"));

  const courseMarkup = renderToStaticMarkup(
    React.createElement(mod.Course, {
      name: "Prompt Delivery 101",
      duration: "4 weeks",
      educationalLevel: "Beginner",
      modules: [
        { title: "Module A" },
        { title: "Module B", summary: "Hands-on." },
      ],
      viewModel: { outcomes: ["Ship prompts", "Measure outcomes"] },
    }),
  );
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
      structuredDataOverrides: { name: "", hasPart: [{ acceptedAnswer: { text: "" } }] },
      viewModel: { revealMode: "accordion", outro: React.createElement("p", null, "Done") },
    }),
  );
  assert.ok(quizMarkup.includes("Answer hidden. Reveal when ready."));
  assert.ok(quizMarkup.includes("Model swap"));
  assert.ok(quizMarkup.includes("\"name\":\"Prompt QA\""));
  assert.ok(quizMarkup.includes("\"text\":\"Elapsed time.\""));
  assert.ok(quizMarkup.includes("Done"));
});

