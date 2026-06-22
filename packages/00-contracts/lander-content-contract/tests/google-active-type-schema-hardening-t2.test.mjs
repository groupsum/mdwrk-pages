import assert from "node:assert/strict";
import test from "node:test";

import { validateStructuredDataByType } from "../dist/index.js";

test("T2: hardened Google-targeted contracts accept alternate runtime shapes without mutation", () => {
  const payload = Object.freeze({
    "@type": "MathSolver",
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
    "@type": "Quiz",
    hasPart: [{ "@type": "Offer", name: "Q?" }],
  });
  const second = validateStructuredDataByType("Quiz", {
    "@type": "Quiz",
    hasPart: [{ "@type": "Offer", name: "Q?" }],
  });

  assert.deepEqual(second, first);
  assert.ok(first.length > 0);
});
