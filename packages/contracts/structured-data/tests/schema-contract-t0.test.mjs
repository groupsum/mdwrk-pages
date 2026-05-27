import assert from "node:assert/strict";
import test from "node:test";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";

import * as structuredData from "../dist/index.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..", "..", "..", "..");
const contractDistEntry = pathToFileURL(
  path.join(repoRoot, "packages", "lander", "lander-content-contract", "dist", "index.js"),
).href;

test("T0: structured-data exports the governed builders without taking ownership of schema validation", async () => {
  const contract = await import(contractDistEntry);

  assert.equal(typeof structuredData.articleNode, "function");
  assert.equal(typeof structuredData.breadcrumbListSchema, "function");
  assert.equal(typeof structuredData.courseNode, "function");
  assert.equal(typeof structuredData.howToNode, "function");
  assert.equal(typeof structuredData.mathSolverNode, "function");
  assert.equal(typeof structuredData.productNode, "function");
  assert.equal(typeof structuredData.qaPageSchema, "function");
  assert.equal(typeof structuredData.quizNode, "function");
  assert.equal(typeof structuredData.reviewNode, "function");
  assert.equal(typeof structuredData.videoObjectNode, "function");

  assert.equal("validateStructuredDataByType" in structuredData, false);
  assert.equal(typeof contract.validateStructuredDataByType, "function");
});
