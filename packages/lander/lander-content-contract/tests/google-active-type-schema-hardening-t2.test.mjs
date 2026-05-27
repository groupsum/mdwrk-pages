import assert from "node:assert/strict";
import test from "node:test";

import { validateStructuredDataByType } from "../dist/index.js";

test("T2: hardened Google-targeted contracts accept alternate runtime shapes without mutation", () => {
  const payload = Object.freeze({
    name: "Math Solver",
    potentialAction: [
      {
        target: "https://mdwrk.test/math?q={mathExpression}",
        mathExpressionInput: "required name=mathExpression",
        eduQuestionType: ["Algebra"],
      },
    ],
    subjectOf: [
      {
        name: "Math Solver learning resource",
        learningResourceType: "Math Solver",
        teaches: ["Algebra", "Geometry"],
      },
    ],
  });
  const before = JSON.stringify(payload);

  const first = validateStructuredDataByType("MathSolver", payload);
  const second = validateStructuredDataByType("MathSolver", payload);

  assert.equal(JSON.stringify(payload), before);
  assert.deepEqual(first, []);
  assert.deepEqual(second, first);
});

test("T2: hardened Google-targeted contracts keep deterministic nested failure paths", () => {
  const first = validateStructuredDataByType("Quiz", {
    name: "Quiz",
    hasPart: [{ name: "Q?", acceptedAnswer: { text: "" } }],
  });
  const second = validateStructuredDataByType("Quiz", {
    name: "Quiz",
    hasPart: [{ name: "Q?", acceptedAnswer: { text: "" } }],
  });

  assert.deepEqual(second, first);
  assert.ok(first.some((issue) => issue.path === "data.hasPart[0].acceptedAnswer.text"));
});
