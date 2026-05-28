import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "./load-dist.mjs";

function extractShellClass(markup, semanticModifier) {
  const match = markup.match(new RegExp(`<(?:article|section) class="([^"]*${semanticModifier}[^"]*)"`, "u"));
  assert.ok(match, `expected shell class for ${semanticModifier}`);
  return match[1];
}

test("T2: fused semantic className composition stays normalized, deduplicated, and shell-scoped", async () => {
  const mod = await importLanderReactDist();

  const articleMarkup = renderToStaticMarkup(
    React.createElement(mod.Article, {
      title: "Prompt Delivery Studio",
      className: "  article-shell  lander-semantic   article-shell  ",
      body: React.createElement("p", null, "Body"),
    }),
  );
  assert.equal(extractShellClass(articleMarkup, "lander-semantic--article"), "lander-semantic lander-semantic--article article-shell");

  const productMarkup = renderToStaticMarkup(
    React.createElement(mod.Product, {
      name: "Prompt Delivery Studio",
      className: "product-shell   product-shell extra-product-shell   lander-semantic--product",
      emitStructuredData: false,
    }),
  );
  assert.equal(
    extractShellClass(productMarkup, "lander-semantic--product"),
    "lander-semantic lander-semantic--product product-shell extra-product-shell",
  );
  assert.equal(productMarkup.includes("application/ld+json"), false);

  const courseMarkup = renderToStaticMarkup(
    React.createElement(mod.Course, {
      name: "Prompt Delivery 101",
      className: "\n course-shell \t course-shell  course-shell--wide ",
      modules: [{ title: "Module A" }],
    }),
  );
  assert.equal(
    extractShellClass(courseMarkup, "lander-semantic--course"),
    "lander-semantic lander-semantic--course course-shell course-shell--wide",
  );

  const quizMarkup = renderToStaticMarkup(
    React.createElement(mod.Quiz, {
      name: "Prompt QA",
      className: " quiz-shell  lander-semantic  quiz-shell  quiz-shell--study ",
      questions: [{ prompt: "What is latency?", answer: "Elapsed time." }],
    }),
  );
  assert.equal(
    extractShellClass(quizMarkup, "lander-semantic--quiz"),
    "lander-semantic lander-semantic--quiz quiz-shell quiz-shell--study",
  );
});
