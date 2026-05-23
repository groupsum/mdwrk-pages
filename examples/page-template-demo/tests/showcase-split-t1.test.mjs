import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const demoRoot = path.resolve(here, "..");
const distRoot = path.join(demoRoot, "dist");
const assetRoot = path.join(distRoot, "assets");

function firstMatchingFile(root, extension) {
  return fs.readdirSync(root).find((file) => file.endsWith(extension));
}

test("T1: the built showcase artifact contains customer-facing split copy and preview surfaces", () => {
  assert.equal(fs.existsSync(path.join(distRoot, "index.html")), true);
  const jsAsset = firstMatchingFile(assetRoot, ".js");
  const cssAsset = firstMatchingFile(assetRoot, ".css");
  assert.ok(jsAsset, "expected a built JS asset");
  assert.ok(cssAsset, "expected a built CSS asset");

  const builtJs = fs.readFileSync(path.join(assetRoot, jsAsset), "utf8");
  const builtCss = fs.readFileSync(path.join(assetRoot, cssAsset), "utf8");

  for (const phrase of [
    "One experience, two renderer layers",
    "Visible experience",
    "Search profile",
    "Search and assistant readiness",
    "Live site preview",
    "Launch Experience",
    "Editorial Experience",
  ]) {
    assert.ok(builtJs.includes(phrase), `expected built JS to include ${phrase}`);
  }

  for (const selector of [".demo-split__grid", ".demo-split__card", ".demo-schema__panel", ".demo-page-frame"]) {
    assert.ok(builtCss.includes(selector), `expected built CSS to include ${selector}`);
  }
});
