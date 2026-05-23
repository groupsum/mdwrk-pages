import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const packageJson = JSON.parse(readFileSync(path.join(packageRoot, "package.json"), "utf8"));
const viteConfig = readFileSync(path.join(packageRoot, "vite.config.ts"), "utf8");
const mainSource = readFileSync(path.join(packageRoot, "src", "main.tsx"), "utf8");

test("T0: demo consumer imports split renderer packages and avoids app-local structured-data selection", () => {
  assert.equal(packageJson.dependencies["@mdwrk/lander-react-structured-data"]?.startsWith("^"), true);
  assert.ok(packageJson.scripts.test.includes("consumer-cutover-t0.test.mjs"));
  assert.ok(viteConfig.includes('"@mdwrk/lander-react-structured-data"'));

  assert.ok(mainSource.includes('import { VisibleLanderPage } from "@mdwrk/lander-react";'));
  assert.ok(mainSource.includes('import { LanderStructuredData } from "@mdwrk/lander-react-structured-data";'));
  assert.equal(mainSource.includes("import { LanderPage } from \"@mdwrk/lander-react\";"), false);
  assert.equal(mainSource.includes("buildLanderJsonLdGraph"), false);
  assert.equal(mainSource.includes("WebPageStructuredData"), false);
  assert.equal(mainSource.includes("renderStructuredDataIntent"), false);
});
