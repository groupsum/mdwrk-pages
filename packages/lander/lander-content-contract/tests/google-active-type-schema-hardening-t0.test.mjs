import assert from "node:assert/strict";
import test from "node:test";

import { getStructuredDataSchemaByType } from "../dist/index.js";

const governedTypes = [
  "Product",
  "Course",
  "QAPage",
  "Quiz",
  "VideoObject",
  "MathSolver",
  "SolveMathAction",
  "LearningResource",
];

test("T0: high-value Google-targeted structured-data contracts are all governed explicitly", () => {
  for (const type of governedTypes) {
    const entry = getStructuredDataSchemaByType(type);
    assert.ok(entry, `Missing schema for ${type}`);
    assert.equal(entry.type, type);
  }
});
