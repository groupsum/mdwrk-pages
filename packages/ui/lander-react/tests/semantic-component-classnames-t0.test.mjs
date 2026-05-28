import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "./load-dist.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const semanticDir = path.join(packageRoot, "dist", "semantic");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

test("T0: fused semantic component declarations expose className on the public API", () => {
  for (const fileName of ["article.d.ts", "product.d.ts", "course.d.ts", "quiz.d.ts"]) {
    const dts = read(path.join(semanticDir, fileName));
    assert.match(dts, /className\?: string;/, `${fileName} should expose className`);
  }
});

test("T0: fused semantic components apply caller className to the visible shell", async () => {
  const mod = await importLanderReactDist();

  const articleMarkup = renderToStaticMarkup(
    React.createElement(mod.Article, {
      title: "Prompt Delivery Studio",
      className: "article-shell",
      body: React.createElement("p", null, "Body"),
    }),
  );
  assert.ok(articleMarkup.includes('class="lander-semantic lander-semantic--article article-shell"'));

  const productMarkup = renderToStaticMarkup(
    React.createElement(mod.Product, {
      name: "Prompt Delivery Studio",
      className: "product-shell",
    }),
  );
  assert.ok(productMarkup.includes('class="lander-semantic lander-semantic--product product-shell"'));

  const courseMarkup = renderToStaticMarkup(
    React.createElement(mod.Course, {
      name: "Prompt Delivery 101",
      className: "course-shell",
    }),
  );
  assert.ok(courseMarkup.includes('class="lander-semantic lander-semantic--course course-shell"'));

  const quizMarkup = renderToStaticMarkup(
    React.createElement(mod.Quiz, {
      name: "Prompt QA",
      className: "quiz-shell",
      questions: [{ prompt: "What is latency?", answer: "Elapsed time." }],
    }),
  );
  assert.ok(quizMarkup.includes('class="lander-semantic lander-semantic--quiz quiz-shell"'));
});
