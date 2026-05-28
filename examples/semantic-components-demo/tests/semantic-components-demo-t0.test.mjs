import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { showcaseEntries, showcaseEntriesByFamily } from "../src/showcase-catalog.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const demoRoot = path.resolve(here, "..");
const packageJson = JSON.parse(readFileSync(path.join(demoRoot, "package.json"), "utf8"));
const mainSource = readFileSync(path.join(demoRoot, "src", "main.tsx"), "utf8");
const showcaseSource = readFileSync(path.join(demoRoot, "src", "showcase.tsx"), "utf8");
const tokenStyles = readFileSync(path.join(demoRoot, "src", "token-styles.css"), "utf8");

test("T0: semantic components demo defines the full 50-type showcase as a dedicated example surface", () => {
  assert.equal(packageJson.name, "@mdwrk/example-semantic-components-demo");
  assert.ok(packageJson.dependencies["@mdwrk/lander-react"]);
  assert.ok(packageJson.scripts.test.includes("semantic-components-demo-t0.test.mjs"));
  assert.ok(mainSource.includes('import "./token-styles.css";'));
  assert.ok(mainSource.includes("SemanticShowcase"));
  assert.ok(showcaseSource.includes("@mdwrk/lander-react"));
  assert.equal(showcaseEntries.length, 50);
  assert.equal(new Set(showcaseEntries.map((entry) => entry.name)).size, 50);
  assert.equal(showcaseEntriesByFamily.length, 6);
  assert.ok(tokenStyles.includes("semantic-aggregate-rating.css"));
  assert.ok(tokenStyles.includes("semantic-web-site.css"));
});
