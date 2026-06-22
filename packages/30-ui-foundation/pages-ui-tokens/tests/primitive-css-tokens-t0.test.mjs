import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

import * as tokenExports from "../dist/index.js";

const packageJson = JSON.parse(readFileSync(resolve("package.json"), "utf8"));

test("T0: primitive token styles are exported as package CSS assets", () => {
  assert.ok(Array.isArray(tokenExports.MDWRK_PAGES_UI_PRIMITIVE_TOKEN_STYLES));
  assert.equal(tokenExports.MDWRK_PAGES_UI_PRIMITIVE_TOKEN_STYLES.length, 8);
  for (const cssExportPath of tokenExports.MDWRK_PAGES_UI_PRIMITIVE_TOKEN_STYLES) {
    assert.ok(packageJson.exports[cssExportPath] || packageJson.exports["./styles/*.css"], `missing CSS export ${cssExportPath}`);
  }
});

test("T0: primitive token names are defined in primitive CSS", () => {
  const allCss = tokenExports.MDWRK_PAGES_UI_PRIMITIVE_TOKEN_STYLES
    .map((cssExportPath) => readFileSync(resolve("src", cssExportPath.replace("./", "")), "utf8"))
    .join("\n");

  for (const tokenName of tokenExports.MDWRK_PAGES_UI_PRIMITIVE_TOKEN_NAMES) {
    assert.ok(allCss.includes(`--${tokenName}`), `missing primitive token --${tokenName}`);
  }
});
