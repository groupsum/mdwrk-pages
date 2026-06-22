import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import * as tokenExports from "../dist/index.js";
import { semanticTokenFixtures } from "./semantic-token-fixtures.mjs";

const packageJson = JSON.parse(readFileSync(resolve("package.json"), "utf8"));
const rootCss = readFileSync(resolve("src/styles/root.css"), "utf8");

function hasCssExport(cssExportPath) {
  return Boolean(packageJson.exports[cssExportPath] || packageJson.exports["./styles/*.css"]);
}

function hasCssSideEffect(cssSourcePath) {
  return packageJson.sideEffects.includes(cssSourcePath) || packageJson.sideEffects.includes("./src/styles/*.css");
}

assert.equal(tokenExports.MDWRK_PAGES_UI_TOKENS_VERSION, packageJson.version);
assert.ok(tokenExports.MDWRK_PAGES_UI_ROOT_TOKEN_NAMES.includes("mdwrk-font-ui"));
assert.ok(rootCss.includes("--mdwrk-font-ui"));
assert.ok(rootCss.includes("--mdwrk-shadow-strong"));

for (const fixture of semanticTokenFixtures) {
  const cssText = readFileSync(resolve("src/styles", fixture.cssFilename), "utf8");
  const tokenNames = tokenExports[fixture.tokenConstExportName];

  assert.ok(Array.isArray(tokenNames) && tokenNames.length > 0, `missing token export ${fixture.tokenConstExportName}`);
  assert.ok(hasCssExport(fixture.cssExportPath), `missing export ${fixture.cssExportPath}`);
  assert.ok(hasCssSideEffect(fixture.cssSourcePath), `missing sideEffects entry ${fixture.cssSourcePath}`);
  assert.ok(cssText.includes(fixture.shellSelector), `${fixture.cssFilename} should target ${fixture.shellSelector}`);
  assert.ok(cssText.includes(`--${tokenNames[0]}`), `${fixture.cssFilename} should define ${tokenNames[0]}`);
}
