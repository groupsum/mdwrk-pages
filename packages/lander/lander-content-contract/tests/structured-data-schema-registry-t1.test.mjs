import assert from "node:assert/strict";
import test from "node:test";

import {
  validateStructuredDataBySchemaId,
  validateStructuredDataByType,
} from "../dist/index.js";

test("T1: structured-data schema registry resolves representative governed payloads", () => {
  assert.deepEqual(validateStructuredDataByType("Article", {
    name: "Article",
    url: "https://mdwrk.test/article",
    headline: "Article headline",
  }), []);

  assert.deepEqual(validateStructuredDataBySchemaId("https://schemas.mdwrk.com/structured-data/qa-page.schema.json", {
    question: "Q?",
    acceptedAnswer: { text: "A." },
    suggestedAnswer: [{ text: "B." }],
    answerCount: 2,
  }), []);

  assert.deepEqual(validateStructuredDataByType("LearningResource", {
    name: "Math Solver learning resource",
    url: "https://mdwrk.test/math/resource",
    learningResourceType: "Math Solver",
    teaches: ["Algebra"],
  }), []);

  assert.deepEqual(validateStructuredDataByType("SolveMathAction", {
    target: "https://mdwrk.test/math?q={mathExpression}",
    mathExpressionInput: "required name=mathExpression",
    eduQuestionType: ["Algebra"],
  }), []);
});
