import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

import {
  MDWRK_PAGES_UI_SEMANTIC_ARTICLE_TOKEN_NAMES,
  MDWRK_PAGES_UI_SEMANTIC_COURSE_TOKEN_NAMES,
  MDWRK_PAGES_UI_SEMANTIC_PRODUCT_TOKEN_NAMES,
  MDWRK_PAGES_UI_SEMANTIC_QUIZ_TOKEN_NAMES,
} from "../dist/index.js";

const articleCss = readFileSync(resolve("src/styles/semantic-article.css"), "utf8");
const productCss = readFileSync(resolve("src/styles/semantic-product.css"), "utf8");
const courseCss = readFileSync(resolve("src/styles/semantic-course.css"), "utf8");
const quizCss = readFileSync(resolve("src/styles/semantic-quiz.css"), "utf8");

const articleSource = readFileSync(resolve("../lander-react/src/semantic/article.tsx"), "utf8");
const productSource = readFileSync(resolve("../lander-react/src/semantic/product.tsx"), "utf8");
const courseSource = readFileSync(resolve("../lander-react/src/semantic/course.tsx"), "utf8");
const quizSource = readFileSync(resolve("../lander-react/src/semantic/quiz.tsx"), "utf8");

function assertUsesToken(cssText, tokenName, label) {
  const tokenRef = `var(--${tokenName})`;
  assert.ok(cssText.includes(tokenRef), `${label} should consume ${tokenRef}`);
}

function assertDefinesToken(cssText, tokenName, label) {
  assert.ok(cssText.includes(`--${tokenName}`), `${label} should define --${tokenName}`);
}

function assertSourceContainsAll(sourceText, classNames, label) {
  for (const className of classNames) {
    assert.ok(sourceText.includes(className), `${label} should render ${className}`);
  }
}

test("T1: fused semantic token CSS aligns with the visible article and product markup contracts", () => {
  assertSourceContainsAll(
    articleSource,
    [
      "lander-semantic--article",
      "lander-semantic__header",
      "lander-semantic__eyebrow",
      "lander-semantic__title",
      "lander-semantic__subtitle",
      "lander-semantic__description",
      "lander-semantic__meta",
      "lander-semantic__image",
      "lander-semantic__body",
      "lander-semantic__footer",
    ],
    "Article",
  );
  assertSourceContainsAll(
    productSource,
    [
      "lander-semantic--product",
      "lander-semantic__header",
      "lander-semantic__eyebrow",
      "lander-semantic__title",
      "lander-semantic__description",
      "lander-semantic__meta",
      "lander-semantic__image",
      "lander-semantic__body",
      "lander-semantic__actions",
      "lander-semantic__footer",
    ],
    "Product",
  );

  for (const selector of [
    ".lander-semantic--article .lander-semantic__header",
    ".lander-semantic--article .lander-semantic__eyebrow",
    ".lander-semantic--article .lander-semantic__title",
    ".lander-semantic--article .lander-semantic__meta",
    ".lander-semantic--article .lander-semantic__image",
    ".lander-semantic--article .lander-semantic__body",
    ".lander-semantic--article .lander-semantic__footer",
  ]) {
    assert.ok(articleCss.includes(selector), `semantic-article.css should target ${selector}`);
  }

  for (const selector of [
    ".lander-semantic--product .lander-semantic__header",
    ".lander-semantic--product .lander-semantic__eyebrow",
    ".lander-semantic--product .lander-semantic__title",
    ".lander-semantic--product .lander-semantic__image",
    ".lander-semantic--product .lander-semantic__body",
    ".lander-semantic--product .lander-semantic__actions",
    ".lander-semantic--product .lander-page__button",
    ".lander-semantic--product .lander-semantic__footer",
  ]) {
    assert.ok(productCss.includes(selector), `semantic-product.css should target ${selector}`);
  }

  assertUsesToken(articleCss, "mdp-semantic-article-padding", "semantic-article.css");
  assertUsesToken(articleCss, "mdp-semantic-article-gap", "semantic-article.css");
  assertUsesToken(articleCss, "mdp-semantic-article-title-size", "semantic-article.css");
  assertUsesToken(articleCss, "mdp-semantic-article-image-radius", "semantic-article.css");
  assertUsesToken(articleCss, "mdp-semantic-article-meta-gap", "semantic-article.css");

  assertUsesToken(productCss, "mdp-semantic-product-padding", "semantic-product.css");
  assertUsesToken(productCss, "mdp-semantic-product-gap", "semantic-product.css");
  assertUsesToken(productCss, "mdp-semantic-product-image-radius", "semantic-product.css");
  assertUsesToken(productCss, "mdp-semantic-product-price-size", "semantic-product.css");
  assertUsesToken(productCss, "mdp-semantic-product-cta-min-height", "semantic-product.css");
});

test("T1: fused semantic token CSS aligns with the visible course and quiz markup contracts", () => {
  assertSourceContainsAll(
    courseSource,
    [
      "lander-semantic--course",
      "lander-semantic__header",
      "lander-semantic__eyebrow",
      "lander-semantic__title",
      "lander-semantic__description",
      "lander-semantic__meta",
      "lander-semantic__image",
      "lander-semantic__body",
      "lander-semantic__body--modules",
      "lander-semantic__body--outcomes",
      "lander-semantic__footer",
    ],
    "Course",
  );
  assertSourceContainsAll(
    quizSource,
    [
      "lander-semantic--quiz",
      "lander-semantic__header",
      "lander-semantic__title",
      "lander-semantic__description",
      "lander-semantic__body",
      "lander-page__assessment-grid",
      "lander-page__flashcard",
      "lander-page__flashcard-answer",
      "lander-page__flashcard-answer-text",
      "lander-page__flashcard-placeholder",
      "lander-semantic__footer",
    ],
    "Quiz",
  );

  for (const selector of [
    ".lander-semantic--course .lander-semantic__header",
    ".lander-semantic--course .lander-semantic__meta",
    ".lander-semantic--course .lander-semantic__image",
    ".lander-semantic--course .lander-semantic__body",
    ".lander-semantic--course .lander-semantic__body--modules ol",
    ".lander-semantic--course .lander-semantic__body--outcomes ul",
    ".lander-semantic--course .lander-semantic__footer",
  ]) {
    assert.ok(courseCss.includes(selector), `semantic-course.css should target ${selector}`);
  }

  for (const selector of [
    ".lander-semantic--quiz .lander-semantic__header",
    ".lander-semantic--quiz .lander-semantic__body",
    ".lander-semantic--quiz .lander-page__assessment-grid",
    ".lander-semantic--quiz .lander-page__flashcard",
    ".lander-semantic--quiz .lander-page__flashcard-answer",
    ".lander-semantic--quiz .lander-semantic__footer",
  ]) {
    assert.ok(quizCss.includes(selector), `semantic-quiz.css should target ${selector}`);
  }

  assertUsesToken(courseCss, "mdp-semantic-course-padding", "semantic-course.css");
  assertUsesToken(courseCss, "mdp-semantic-course-gap", "semantic-course.css");
  assertUsesToken(courseCss, "mdp-semantic-course-meta-gap", "semantic-course.css");
  assertUsesToken(courseCss, "mdp-semantic-course-module-gap", "semantic-course.css");
  assertUsesToken(courseCss, "mdp-semantic-course-outcome-gap", "semantic-course.css");

  assertUsesToken(quizCss, "mdp-semantic-quiz-padding", "semantic-quiz.css");
  assertUsesToken(quizCss, "mdp-semantic-quiz-gap", "semantic-quiz.css");
  assertUsesToken(quizCss, "mdp-semantic-quiz-card-gap", "semantic-quiz.css");
  assertUsesToken(quizCss, "mdp-semantic-quiz-answer-radius", "semantic-quiz.css");
  assertUsesToken(quizCss, "mdp-semantic-quiz-answer-surface", "semantic-quiz.css");
});

test("T1: every exported frontier token remains defined in the CSS files that own the fused class-name contract", () => {
  for (const tokenName of MDWRK_PAGES_UI_SEMANTIC_ARTICLE_TOKEN_NAMES) {
    assertDefinesToken(articleCss, tokenName, "semantic-article.css");
  }
  for (const tokenName of MDWRK_PAGES_UI_SEMANTIC_PRODUCT_TOKEN_NAMES) {
    assertDefinesToken(productCss, tokenName, "semantic-product.css");
  }
  for (const tokenName of MDWRK_PAGES_UI_SEMANTIC_COURSE_TOKEN_NAMES) {
    assertDefinesToken(courseCss, tokenName, "semantic-course.css");
  }
  for (const tokenName of MDWRK_PAGES_UI_SEMANTIC_QUIZ_TOKEN_NAMES) {
    assertDefinesToken(quizCss, tokenName, "semantic-quiz.css");
  }
});
