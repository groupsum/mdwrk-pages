import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

import * as tokenExports from "../dist/index.js";

test("T1: primitive token CSS files define light and dark theme defaults", () => {
  for (const cssExportPath of tokenExports.MDWRK_PAGES_UI_PRIMITIVE_TOKEN_STYLES) {
    const cssText = readFileSync(resolve("src", cssExportPath.replace("./", "")), "utf8");
    assert.ok(cssText.includes('[data-lander-theme="lander-light"]'), `${cssExportPath} should define light theme defaults`);
    assert.ok(cssText.includes('[data-lander-theme="lander-dark"]'), `${cssExportPath} should define dark theme defaults`);
  }
});

test("T1: primitive token CSS files target primitive markers", () => {
  const requiredSelectors = [
    ".mdwrk-primitive--button",
    ".mdwrk-primitive--card",
    ".mdwrk-primitive--badge",
    ".mdwrk-primitive--field",
    ".mdwrk-primitive--tabs",
    ".mdwrk-primitive--icon",
    ".mdwrk-primitive--dialog",
    ".mdwrk-primitive--stack",
  ];
  const allCss = tokenExports.MDWRK_PAGES_UI_PRIMITIVE_TOKEN_STYLES
    .map((cssExportPath) => readFileSync(resolve("src", cssExportPath.replace("./", "")), "utf8"))
    .join("\n");

  for (const selector of requiredSelectors) {
    assert.ok(allCss.includes(selector), `missing primitive selector ${selector}`);
  }
});
