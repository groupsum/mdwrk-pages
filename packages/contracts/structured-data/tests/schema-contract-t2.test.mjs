import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";

import {
  articleNode,
  mathSolverNode,
  productNode,
  quizNode,
  solveMathActionNode,
  learningResourceNode,
  videoObjectNode,
} from "../dist/index.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..", "..", "..", "..");
const contractDistEntry = pathToFileURL(
  path.join(repoRoot, "packages", "lander", "lander-content-contract", "dist", "index.js"),
).href;

test("T2: representative structured-data builders do not mutate frozen inputs and stay contract-stable", async () => {
  const { validateStructuredDataByType } = await import(contractDistEntry);

  const articleInput = Object.freeze({
    name: "Article",
    url: "https://mdwrk.test/article",
    headline: "Article headline",
  });
  const quizInput = Object.freeze({
    name: "Quiz",
    hasPart: Object.freeze([
      Object.freeze({
        name: "Q?",
        acceptedAnswer: Object.freeze({ text: "A." }),
      }),
    ]),
  });
  const productInput = Object.freeze({
    name: "Product",
    offers: Object.freeze({ "@type": "Offer", price: "10.00", priceCurrency: "USD" }),
  });
  const videoInput = Object.freeze({
    name: "Video",
    thumbnailUrl: "https://mdwrk.test/video.png",
    uploadDate: "2026-05-27",
  });
  const mathInput = Object.freeze({
    name: "Math Solver",
    potentialAction: solveMathActionNode({
      target: "https://mdwrk.test/math?q={mathExpression}",
      mathExpressionInput: "required name=mathExpression",
    }),
    learningResource: learningResourceNode({
      name: "Math Solver learning resource",
      learningResourceType: "Math Solver",
      teaches: ["Algebra"],
    }),
  });

  const before = JSON.stringify({ articleInput, quizInput, productInput, videoInput, mathInput });

  const article = articleNode(articleInput);
  const quiz = quizNode(quizInput);
  const product = productNode(productInput);
  const video = videoObjectNode(videoInput);
  const math = mathSolverNode(mathInput);

  assert.equal(JSON.stringify({ articleInput, quizInput, productInput, videoInput, mathInput }), before);

  const first = [
    validateStructuredDataByType("Article", { name: article.name, url: article.url, headline: article.headline }),
    validateStructuredDataByType("Quiz", {
      name: quiz.name,
      hasPart: quiz.hasPart.map((question) => ({
        name: question.name,
        acceptedAnswer: { text: question.acceptedAnswer.text },
      })),
    }),
    validateStructuredDataByType("Product", { name: product.name, offers: product.offers }),
    validateStructuredDataByType("VideoObject", {
      name: video.name,
      thumbnailUrl: video.thumbnailUrl,
      uploadDate: video.uploadDate,
    }),
    validateStructuredDataByType("MathSolver", {
      name: math.name,
      potentialAction: math.potentialAction,
      subjectOf: math.subjectOf,
    }),
  ];
  const second = [
    validateStructuredDataByType("Article", { name: article.name, url: article.url, headline: article.headline }),
    validateStructuredDataByType("Quiz", {
      name: quiz.name,
      hasPart: quiz.hasPart.map((question) => ({
        name: question.name,
        acceptedAnswer: { text: question.acceptedAnswer.text },
      })),
    }),
    validateStructuredDataByType("Product", { name: product.name, offers: product.offers }),
    validateStructuredDataByType("VideoObject", {
      name: video.name,
      thumbnailUrl: video.thumbnailUrl,
      uploadDate: video.uploadDate,
    }),
    validateStructuredDataByType("MathSolver", {
      name: math.name,
      potentialAction: math.potentialAction,
      subjectOf: math.subjectOf,
    }),
  ];

  assert.deepEqual(first, second);
  assert.ok(first.every((issues) => issues.length === 0));
});
