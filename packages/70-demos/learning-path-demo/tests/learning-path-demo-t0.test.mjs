import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const packageJson = JSON.parse(readFileSync(path.join(packageRoot, "package.json"), "utf8"));
const mainSource = readFileSync(path.join(packageRoot, "src", "main.tsx"), "utf8");
const siteSource = readFileSync(path.join(packageRoot, "src", "demo-site.ts"), "utf8");
const dockerfile = readFileSync(path.join(packageRoot, "Dockerfile"), "utf8");
const compose = readFileSync(path.join(packageRoot, "compose.yaml"), "utf8");

test("T0: learning-path demo depends on schema-backed education runtime and Docker delivery", () => {
  assert.equal(packageJson.dependencies["@mdwrk/lander-page-template-presets"]?.startsWith("^"), true);
  assert.equal(packageJson.dependencies["@mdwrk/lander-react-structured-data"]?.startsWith("^"), true);
  assert.ok(mainSource.includes('import { VisibleLanderPage } from "@mdwrk/lander-react";'));
  assert.ok(mainSource.includes('import { LanderStructuredData, buildLanderJsonLdGraph } from "@mdwrk/lander-react-structured-data";'));
  assert.ok(siteSource.includes("buildPresetFromMaps"));
  assert.ok(siteSource.includes("compilePageTemplateGraph"));
  assert.ok(siteSource.includes("compileDemoSite"));
  assert.ok(siteSource.includes("listTemplateDataSchemas"));
  assert.ok(siteSource.includes('slug: "/"'));
  assert.ok(siteSource.includes('label: "Home"'));
  assert.ok(siteSource.includes('"education.learning-path"'));
  assert.ok(siteSource.includes('templateId: "education.flashcards"'));
  assert.ok(siteSource.includes('templateId: "education.quiz"'));
  assert.ok(siteSource.includes('"education.course-test"'));
  assert.ok(dockerfile.includes("packages/70-demos/learning-path-demo/dist"));
  assert.ok(compose.includes("4191:80"));
});
