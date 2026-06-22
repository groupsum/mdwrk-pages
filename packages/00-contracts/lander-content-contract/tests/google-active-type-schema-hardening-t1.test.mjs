import assert from "node:assert/strict";
import test from "node:test";

import { validateStructuredDataByType } from "../dist/index.js";

test("T1: hardened Google-targeted contracts accept minimal generator-conformant payloads for high-value types", () => {
  for (const type of [
    "Product",
    "Course",
    "QAPage",
    "Quiz",
    "VideoObject",
    "LearningResource",
    "SolveMathAction",
    "MathSolver",
  ]) {
    assert.deepEqual(validateStructuredDataByType(type, { "@type": type }), []);
  }
});

test("T1: hardened Google-targeted contracts reject invalid nested payloads", () => {
  assert.ok(validateStructuredDataByType("Product", {
    "@type": "Product",
    offers: "invalid-offer-shape",
  }).some((issue) => issue.path === "data.offers"));

  assert.ok(validateStructuredDataByType("Course", {
    "@type": "Course",
    hasCourseInstance: ["invalid-instance-shape"],
  }).some((issue) => issue.path === "data.hasCourseInstance" || issue.path.startsWith("data.hasCourseInstance[")));

  assert.ok(validateStructuredDataByType("MathSolver", {
    "@type": "MathSolver",
    potentialAction: "invalid-action-shape",
  }).some((issue) => issue.path === "data.potentialAction"));
});
