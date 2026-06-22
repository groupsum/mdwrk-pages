import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

import * as tokenExports from "../dist/index.js";
import { semanticTokenFixtures } from "./semantic-token-fixtures.mjs";

const packageJson = JSON.parse(readFileSync(resolve("package.json"), "utf8"));
const rootCss = readFileSync(resolve("src/styles/root.css"), "utf8");

function readCssFile(filename) {
  return readFileSync(resolve("src/styles", filename), "utf8");
}

function hasCssExport(cssExportPath) {
  return Boolean(packageJson.exports[cssExportPath] || packageJson.exports["./styles/*.css"]);
}

function hasCssSideEffect(cssSourcePath) {
  return packageJson.sideEffects.includes(cssSourcePath) || packageJson.sideEffects.includes("./src/styles/*.css");
}

function assertDefinesAll(cssText, tokenNames, label) {
  for (const tokenName of tokenNames) {
    assert.ok(cssText.includes(`--${tokenName}`), `${label} should define --${tokenName}`);
  }
}

test("T0: pages-ui-tokens exports all fused semantic CSS token files", () => {
  assert.ok(packageJson.exports["./styles/root.css"], "missing export ./styles/root.css");
  for (const fixture of semanticTokenFixtures) {
    assert.ok(hasCssExport(fixture.cssExportPath), `missing export ${fixture.cssExportPath}`);
  }
});

test("T0: pages-ui-tokens sideEffects preserve all fused semantic CSS token files", () => {
  assert.ok(packageJson.sideEffects.includes("./src/styles/root.css"), "missing sideEffects entry ./src/styles/root.css");
  for (const fixture of semanticTokenFixtures) {
    assert.ok(hasCssSideEffect(fixture.cssSourcePath), `missing sideEffects entry ${fixture.cssSourcePath}`);
  }
});

test("T0: pages-ui-tokens defines every exported fused semantic token name in CSS", () => {
  assertDefinesAll(rootCss, tokenExports.MDWRK_PAGES_UI_ROOT_TOKEN_NAMES, "root.css");
  for (const fixture of semanticTokenFixtures) {
    const cssText = readCssFile(fixture.cssFilename);
    const tokenNames = tokenExports[fixture.tokenConstExportName];
    assert.ok(Array.isArray(tokenNames) && tokenNames.length > 0, `missing token export ${fixture.tokenConstExportName}`);
    assertDefinesAll(cssText, tokenNames, fixture.cssFilename);
  }
});

test("T0: fused semantic CSS token files target the visible semantic class-name contract", () => {
  for (const fixture of semanticTokenFixtures) {
    const cssText = readCssFile(fixture.cssFilename);
    assert.ok(cssText.includes(fixture.shellSelector), `${fixture.cssFilename} should target ${fixture.shellSelector}`);
    assert.ok(cssText.includes(`${fixture.shellSelector} .lander-semantic__header`), `${fixture.cssFilename} should target shell header`);
    assert.ok(cssText.includes(`${fixture.shellSelector} .lander-semantic__body`), `${fixture.cssFilename} should target shell body`);
    assert.ok(cssText.includes(`${fixture.shellSelector} .lander-semantic__footer`), `${fixture.cssFilename} should target shell footer`);
  }
});
