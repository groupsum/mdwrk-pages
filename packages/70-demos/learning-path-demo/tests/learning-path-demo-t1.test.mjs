import assert from "node:assert/strict";
import test from "node:test";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const distRoot = path.join(packageRoot, "dist");
const assetDir = path.join(distRoot, "assets");
const assetFile = readdirSync(assetDir).find((name) => name.endsWith(".js"));
const bundle = readFileSync(path.join(assetDir, assetFile), "utf8");

test("T1: built demo bundle contains all five education entity surfaces", () => {
  assert.ok(bundle.includes('href:"/"'));
  assert.ok(bundle.includes("/academy/"));
  assert.ok(bundle.includes("MdWrk Academy Home"));
  assert.ok(bundle.includes("Academy Summary"));
  assert.ok(bundle.includes("Learning Paths"));
  assert.ok(bundle.includes("AI Learning Architect Academy"));
  assert.ok(bundle.includes("Prompt Delivery Studio"));
  assert.ok(bundle.includes("Structured Learning Systems"));
  assert.ok(bundle.includes("Prompt Research Systems"));
  assert.ok(bundle.includes("Release And Review Ops"));
  assert.ok(bundle.includes("Governance And Audit Rails"));
  assert.ok(bundle.includes("Flash Cards: Learning Systems"));
  assert.ok(bundle.includes("Contracting Learning Entities"));
  assert.ok(bundle.includes("Quiz: Contract Boundaries"));
  assert.ok(bundle.includes("Course Test: Template Delivery"));
  assert.ok(bundle.includes("education.learning-path"));
  assert.ok(bundle.includes("education.course"));
  assert.ok(bundle.includes("education.flashcards"));
  assert.ok(bundle.includes("education.module"));
  assert.ok(bundle.includes("education.quiz"));
  assert.ok(bundle.includes("education.course-test"));
});
