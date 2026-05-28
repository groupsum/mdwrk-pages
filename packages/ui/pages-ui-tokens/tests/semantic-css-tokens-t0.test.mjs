import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

import {
  MDWRK_PAGES_UI_ROOT_TOKEN_NAMES,
  MDWRK_PAGES_UI_SEMANTIC_ARTICLE_TOKEN_NAMES,
  MDWRK_PAGES_UI_SEMANTIC_COURSE_TOKEN_NAMES,
  MDWRK_PAGES_UI_SEMANTIC_PRODUCT_TOKEN_NAMES,
  MDWRK_PAGES_UI_SEMANTIC_QUIZ_TOKEN_NAMES,
} from "../dist/index.js";

const packageJson = JSON.parse(readFileSync(resolve("package.json"), "utf8"));
const rootCss = readFileSync(resolve("src/styles/root.css"), "utf8");
const articleCss = readFileSync(resolve("src/styles/semantic-article.css"), "utf8");
const productCss = readFileSync(resolve("src/styles/semantic-product.css"), "utf8");
const courseCss = readFileSync(resolve("src/styles/semantic-course.css"), "utf8");
const quizCss = readFileSync(resolve("src/styles/semantic-quiz.css"), "utf8");

function assertDefinesAll(cssText, tokenNames, label) {
  for (const tokenName of tokenNames) {
    assert.ok(cssText.includes(`--${tokenName}`), `${label} should define --${tokenName}`);
  }
}

test("T0: pages-ui-tokens exports all fused semantic CSS token files", () => {
  for (const exportKey of [
    "./styles/root.css",
    "./styles/semantic-article.css",
    "./styles/semantic-product.css",
    "./styles/semantic-course.css",
    "./styles/semantic-quiz.css",
  ]) {
    assert.ok(packageJson.exports[exportKey], `missing export ${exportKey}`);
  }
});

test("T0: pages-ui-tokens sideEffects preserve all fused semantic CSS token files", () => {
  for (const sideEffectPath of [
    "./src/styles/root.css",
    "./src/styles/semantic-article.css",
    "./src/styles/semantic-product.css",
    "./src/styles/semantic-course.css",
    "./src/styles/semantic-quiz.css",
  ]) {
    assert.ok(packageJson.sideEffects.includes(sideEffectPath), `missing sideEffects entry ${sideEffectPath}`);
  }
});

test("T0: pages-ui-tokens defines every exported fused semantic token name in CSS", () => {
  assertDefinesAll(rootCss, MDWRK_PAGES_UI_ROOT_TOKEN_NAMES, "root.css");
  assertDefinesAll(articleCss, MDWRK_PAGES_UI_SEMANTIC_ARTICLE_TOKEN_NAMES, "semantic-article.css");
  assertDefinesAll(productCss, MDWRK_PAGES_UI_SEMANTIC_PRODUCT_TOKEN_NAMES, "semantic-product.css");
  assertDefinesAll(courseCss, MDWRK_PAGES_UI_SEMANTIC_COURSE_TOKEN_NAMES, "semantic-course.css");
  assertDefinesAll(quizCss, MDWRK_PAGES_UI_SEMANTIC_QUIZ_TOKEN_NAMES, "semantic-quiz.css");
});

test("T0: fused semantic CSS token files target the visible semantic class-name contract", () => {
  assert.ok(articleCss.includes(".lander-semantic--article"));
  assert.ok(productCss.includes(".lander-semantic--product"));
  assert.ok(courseCss.includes(".lander-semantic--course"));
  assert.ok(quizCss.includes(".lander-semantic--quiz"));

  assert.ok(articleCss.includes(".lander-semantic__header"));
  assert.ok(productCss.includes(".lander-semantic__actions"));
  assert.ok(courseCss.includes(".lander-semantic__body--modules"));
  assert.ok(courseCss.includes(".lander-semantic__body--outcomes"));
  assert.ok(quizCss.includes(".lander-page__flashcard-answer"));
});
