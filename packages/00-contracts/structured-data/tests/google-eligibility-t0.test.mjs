import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";

import { softwareApplicationNode } from "../dist/index.js";
import {
  GOOGLE_SEARCH_PROFILE,
  GOOGLE_SEARCH_PROFILE_VERSION,
  assertGoogleRichResult,
  validateGoogleRichResult,
} from "../dist/google/index.js";

test("T0: Google eligibility is a versioned public subpath", () => {
  const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
  assert.deepEqual(packageJson.exports["./google"], {
    types: "./dist/google/index.d.ts",
    import: "./dist/google/index.js",
  });
  assert.equal(GOOGLE_SEARCH_PROFILE_VERSION, "2026-06-15");
  assert.equal(GOOGLE_SEARCH_PROFILE.version, GOOGLE_SEARCH_PROFILE_VERSION);
  assert.deepEqual(Object.keys(GOOGLE_SEARCH_PROFILE.features).sort(), [
    "job-posting",
    "product-snippet",
    "software-application",
  ]);
  assert.equal(typeof validateGoogleRichResult, "function");
  assert.equal(typeof assertGoogleRichResult, "function");
});

test("T0: generic Schema.org builders remain independent from Google eligibility", () => {
  const semanticNode = softwareApplicationNode({ name: "Semantic only" });
  assert.equal(semanticNode["@type"], "SoftwareApplication");
  assert.equal(semanticNode.offers, undefined);

  const eligibility = validateGoogleRichResult("software-application", semanticNode);
  assert.equal(eligibility.eligible, false);
  assert.ok(eligibility.issues.some((entry) => entry.path === "offers"));
});

