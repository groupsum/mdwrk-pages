import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  MDWRK_PAGES_UI_ROOT_TOKEN_NAMES,
  MDWRK_PAGES_UI_SEMANTIC_ARTICLE_TOKEN_NAMES,
  MDWRK_PAGES_UI_SEMANTIC_COURSE_TOKEN_NAMES,
  MDWRK_PAGES_UI_SEMANTIC_PRODUCT_TOKEN_NAMES,
  MDWRK_PAGES_UI_SEMANTIC_QUIZ_TOKEN_NAMES,
  MDWRK_PAGES_UI_TOKENS_VERSION,
} from "../dist/index.js";

const rootCss = readFileSync(resolve("src/styles/root.css"), "utf8");
const articleCss = readFileSync(resolve("src/styles/semantic-article.css"), "utf8");
const productCss = readFileSync(resolve("src/styles/semantic-product.css"), "utf8");
const courseCss = readFileSync(resolve("src/styles/semantic-course.css"), "utf8");
const quizCss = readFileSync(resolve("src/styles/semantic-quiz.css"), "utf8");
const packageJson = JSON.parse(readFileSync(resolve("package.json"), "utf8"));

assert.equal(MDWRK_PAGES_UI_TOKENS_VERSION, "0.1.0");
assert.ok(MDWRK_PAGES_UI_ROOT_TOKEN_NAMES.includes("mdwrk-font-ui"));
assert.ok(MDWRK_PAGES_UI_SEMANTIC_ARTICLE_TOKEN_NAMES.includes("mdp-semantic-article-padding"));
assert.ok(MDWRK_PAGES_UI_SEMANTIC_PRODUCT_TOKEN_NAMES.includes("mdp-semantic-product-padding"));
assert.ok(MDWRK_PAGES_UI_SEMANTIC_COURSE_TOKEN_NAMES.includes("mdp-semantic-course-padding"));
assert.ok(MDWRK_PAGES_UI_SEMANTIC_QUIZ_TOKEN_NAMES.includes("mdp-semantic-quiz-padding"));

assert.ok(rootCss.includes("--mdwrk-font-ui"));
assert.ok(rootCss.includes("--mdwrk-shadow-strong"));
assert.ok(articleCss.includes(".lander-semantic--article"));
assert.ok(articleCss.includes("--mdp-semantic-article-padding"));
assert.ok(productCss.includes(".lander-semantic--product"));
assert.ok(productCss.includes("--mdp-semantic-product-padding"));
assert.ok(courseCss.includes(".lander-semantic--course"));
assert.ok(courseCss.includes("--mdp-semantic-course-padding"));
assert.ok(quizCss.includes(".lander-semantic--quiz"));
assert.ok(quizCss.includes("--mdp-semantic-quiz-padding"));

for (const exportKey of [
  "./styles/root.css",
  "./styles/semantic-article.css",
  "./styles/semantic-product.css",
  "./styles/semantic-course.css",
  "./styles/semantic-quiz.css",
]) {
  assert.ok(packageJson.exports[exportKey], `missing export ${exportKey}`);
}
