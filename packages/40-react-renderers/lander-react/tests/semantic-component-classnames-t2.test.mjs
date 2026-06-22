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

function assertShellTokens(markup, semanticModifier, expectedTokens) {
  const className = extractShellClass(markup, semanticModifier);
  const tokens = className.split(/\s+/u).filter(Boolean);
  assert.equal(new Set(tokens).size, tokens.length, `expected normalized tokens for ${semanticModifier}`);
  for (const token of expectedTokens) {
    assert.ok(tokens.includes(token), `expected ${semanticModifier} class to include ${token}`);
  }
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
  assertShellTokens(articleMarkup, "lander-semantic--article", [
    "mdwrk-primitive",
    "mdwrk-primitive--surface",
    "lander-semantic",
    "lander-semantic--article",
    "article-shell",
  ]);

  const productMarkup = renderToStaticMarkup(
    React.createElement(mod.Product, {
      name: "Prompt Delivery Studio",
      className: "product-shell   product-shell extra-product-shell   lander-semantic--product",
      emitStructuredData: false,
    }),
  );
  assertShellTokens(productMarkup, "lander-semantic--product", [
    "mdwrk-primitive",
    "mdwrk-primitive--surface",
    "lander-semantic",
    "lander-semantic--product",
    "product-shell",
    "extra-product-shell",
  ]);
  assert.equal(productMarkup.includes("application/ld+json"), false);

  const courseMarkup = renderToStaticMarkup(
    React.createElement(mod.Course, {
      name: "Prompt Delivery 101",
      className: "\n course-shell \t course-shell  course-shell--wide ",
      modules: [{ title: "Module A" }],
    }),
  );
  assertShellTokens(courseMarkup, "lander-semantic--course", [
    "lander-semantic",
    "lander-semantic--course",
    "course-shell",
    "course-shell--wide",
  ]);

  const quizMarkup = renderToStaticMarkup(
    React.createElement(mod.Quiz, {
      name: "Prompt QA",
      className: " quiz-shell  lander-semantic  quiz-shell  quiz-shell--study ",
      questions: [{ prompt: "What is latency?", answer: "Elapsed time." }],
    }),
  );
  assertShellTokens(quizMarkup, "lander-semantic--quiz", [
    "lander-semantic",
    "lander-semantic--quiz",
    "quiz-shell",
    "quiz-shell--study",
  ]);
});
