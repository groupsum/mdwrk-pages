import assert from "node:assert/strict";
import test from "node:test";

import { validateStructuredDataByType } from "../dist/index.js";

test("T1: hardened Google-targeted contracts accept representative runtime-aligned payloads", () => {
  assert.deepEqual(validateStructuredDataByType("Product", {
    name: "Product",
    brand: "MdWrk",
    offers: { "@type": "Offer", price: "10.00", priceCurrency: "USD" },
  }), []);

  assert.deepEqual(validateStructuredDataByType("Course", {
    name: "Course",
    provider: "MdWrk",
    hasCourseInstance: [{ "@type": "CourseInstance", name: "May cohort" }],
  }), []);

  assert.deepEqual(validateStructuredDataByType("QAPage", {
    question: "Q?",
    acceptedAnswer: { text: "A." },
    suggestedAnswer: [{ text: "B." }],
    answerCount: 2,
  }), []);

  assert.deepEqual(validateStructuredDataByType("Quiz", {
    name: "Quiz",
    hasPart: [{ name: "Q?", acceptedAnswer: { text: "A." }, eduQuestionType: "Flashcard" }],
  }), []);

  assert.deepEqual(validateStructuredDataByType("VideoObject", {
    name: "Video",
    thumbnailUrl: "https://mdwrk.test/video.png",
    uploadDate: "2026-05-27",
  }), []);

  assert.deepEqual(validateStructuredDataByType("LearningResource", {
    name: "Math Solver learning resource",
    learningResourceType: "Math Solver",
    teaches: "Algebra",
  }), []);

  assert.deepEqual(validateStructuredDataByType("SolveMathAction", {
    target: { "@type": "EntryPoint", url: "https://mdwrk.test/math?q={mathExpression}" },
    "mathExpression-input": "required name=mathExpression",
    eduQuestionType: ["Algebra"],
  }), []);

  assert.deepEqual(validateStructuredDataByType("MathSolver", {
    name: "Math Solver",
    potentialAction: {
      target: "https://mdwrk.test/math?q={mathExpression}",
      mathExpressionInput: "required name=mathExpression",
    },
    subjectOf: {
      name: "Math Solver learning resource",
      learningResourceType: "Math Solver",
      teaches: ["Algebra"],
    },
  }), []);
});

test("T1: hardened Google-targeted contracts reject invalid nested payloads", () => {
  assert.ok(validateStructuredDataByType("Product", {
    name: "Product",
    offers: "invalid-offer-shape",
  }).some((issue) => issue.path === "data.offers"));

  assert.ok(validateStructuredDataByType("Course", {
    name: "Course",
    hasCourseInstance: ["invalid-instance-shape"],
  }).some((issue) => issue.path === "data.hasCourseInstance" || issue.path.startsWith("data.hasCourseInstance[")));

  assert.ok(validateStructuredDataByType("MathSolver", {
    name: "Math Solver",
    potentialAction: "invalid-action-shape",
  }).some((issue) => issue.path === "data.potentialAction"));
});
