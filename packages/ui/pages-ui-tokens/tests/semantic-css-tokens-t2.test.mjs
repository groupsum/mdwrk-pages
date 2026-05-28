import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const articleCss = readFileSync(resolve("src/styles/semantic-article.css"), "utf8");
const productCss = readFileSync(resolve("src/styles/semantic-product.css"), "utf8");
const courseCss = readFileSync(resolve("src/styles/semantic-course.css"), "utf8");
const quizCss = readFileSync(resolve("src/styles/semantic-quiz.css"), "utf8");

const landerThemeCssDir = resolve("../lander-theme/src/styles");
const landerThemeCss = readdirSync(landerThemeCssDir)
  .filter((entry) => entry.endsWith(".css"))
  .map((entry) => readFileSync(resolve(landerThemeCssDir, entry), "utf8"))
  .join("\n");

const semanticCssEntries = [
  {
    label: "article",
    cssText: articleCss,
    shellSelector: ".lander-semantic--article",
    ownPrefix: "--mdp-semantic-article-",
    foreignPrefixes: ["--mdp-semantic-product-", "--mdp-semantic-course-", "--mdp-semantic-quiz-"],
  },
  {
    label: "product",
    cssText: productCss,
    shellSelector: ".lander-semantic--product",
    ownPrefix: "--mdp-semantic-product-",
    foreignPrefixes: ["--mdp-semantic-article-", "--mdp-semantic-course-", "--mdp-semantic-quiz-"],
  },
  {
    label: "course",
    cssText: courseCss,
    shellSelector: ".lander-semantic--course",
    ownPrefix: "--mdp-semantic-course-",
    foreignPrefixes: ["--mdp-semantic-article-", "--mdp-semantic-product-", "--mdp-semantic-quiz-"],
  },
  {
    label: "quiz",
    cssText: quizCss,
    shellSelector: ".lander-semantic--quiz",
    ownPrefix: "--mdp-semantic-quiz-",
    foreignPrefixes: ["--mdp-semantic-article-", "--mdp-semantic-product-", "--mdp-semantic-course-"],
  },
];

function getSelectorBlocks(cssText) {
  return cssText
    .split("{")
    .slice(0, -1)
    .map((chunk) => chunk.trim().split("}").at(-1)?.trim() ?? "")
    .filter(Boolean);
}

function getSemanticSelectorBlocks(cssText) {
  return getSelectorBlocks(cssText).filter(
    (selector) =>
      selector.includes(".lander-semantic") ||
      selector.includes(".lander-page__") ||
      selector.includes("[data-lander-theme") ||
      selector.includes(":root"),
  );
}

test("T2: semantic token CSS stays shell-scoped and does not leak unscoped semantic selectors", () => {
  for (const { label, cssText, shellSelector } of semanticCssEntries) {
    for (const selector of getSemanticSelectorBlocks(cssText)) {
      if (selector.startsWith(":root") || selector.startsWith("[data-lander-theme") || selector.startsWith(":root,")) {
        continue;
      }
      assert.ok(
        selector.includes(shellSelector),
        `${label} selector should stay scoped to ${shellSelector}: ${selector}`,
      );
    }
  }
});

test("T2: semantic token CSS files only define and consume their own semantic token family", () => {
  for (const { label, cssText, ownPrefix, foreignPrefixes } of semanticCssEntries) {
    assert.ok(cssText.includes(ownPrefix), `${label} CSS should define its own semantic token family`);
    for (const foreignPrefix of foreignPrefixes) {
      assert.equal(
        cssText.includes(foreignPrefix),
        false,
        `${label} CSS should not define or consume foreign token family ${foreignPrefix}`,
      );
    }
  }
});

test("T2: fused semantic CSS token ownership remains outside lander-theme", () => {
  for (const ownPrefix of [
    "--mdp-semantic-article-",
    "--mdp-semantic-product-",
    "--mdp-semantic-course-",
    "--mdp-semantic-quiz-",
  ]) {
    assert.equal(
      landerThemeCss.includes(ownPrefix),
      false,
      `lander-theme should not own fused semantic token family ${ownPrefix}`,
    );
  }
});
