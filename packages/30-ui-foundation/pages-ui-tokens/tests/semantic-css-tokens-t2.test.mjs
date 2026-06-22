import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

import * as tokenExports from "../dist/index.js";
import { semanticTokenFixtures } from "./semantic-token-fixtures.mjs";

const landerThemeCssDir = resolve("../lander-theme/src/styles");
const landerThemeCss = readdirSync(landerThemeCssDir)
  .filter((entry) => entry.endsWith(".css"))
  .map((entry) => readFileSync(resolve(landerThemeCssDir, entry), "utf8"))
  .join("\n");

function readCssFile(filename) {
  return readFileSync(resolve("src/styles", filename), "utf8");
}

const rootCss = readCssFile("root.css");

function getSelectorBlocks(cssText) {
  return cssText
    .split("{")
    .slice(0, -1)
    .map((chunk) => chunk.trim().split("}").at(-1)?.trim() ?? "")
    .filter(Boolean);
}

function getSemanticSelectorBlocks(cssText) {
  return getSelectorBlocks(cssText).filter(
    (selector) =>
      selector.includes(".lander-semantic") ||
      selector.includes("[data-lander-theme") ||
      selector.includes(":root"),
  );
}

test("T2: semantic token CSS stays shell-scoped and does not leak unscoped semantic selectors", () => {
  for (const fixture of semanticTokenFixtures) {
    const cssText = readCssFile(fixture.cssFilename);
    for (const selector of getSemanticSelectorBlocks(cssText)) {
      if (selector.startsWith(":root") || selector.startsWith("[data-lander-theme") || selector.startsWith(":root,")) {
        continue;
      }
      assert.ok(
        selector.includes(fixture.shellSelector),
        `${fixture.cssFilename} selector should stay scoped to ${fixture.shellSelector}: ${selector}`,
      );
    }
  }
});

test("T2: semantic token CSS files only define and consume their own semantic token family", () => {
  for (const fixture of semanticTokenFixtures) {
    const cssText = readCssFile(fixture.cssFilename);
    const ownTokenNames = tokenExports[fixture.tokenConstExportName];
    assert.ok(Array.isArray(ownTokenNames) && ownTokenNames.length > 0, `missing token export ${fixture.tokenConstExportName}`);
    assert.ok(cssText.includes(`--${ownTokenNames[0]}`), `${fixture.cssFilename} should define its own semantic token family`);
    for (const foreignFixture of semanticTokenFixtures) {
      if (foreignFixture.name === fixture.name) continue;
      const foreignTokenNames = tokenExports[foreignFixture.tokenConstExportName];
      assert.ok(Array.isArray(foreignTokenNames) && foreignTokenNames.length > 0, `missing token export ${foreignFixture.tokenConstExportName}`);
      for (const foreignTokenName of foreignTokenNames) {
        const foreignTokenRef = `--${foreignTokenName}`;
        if (ownTokenNames.includes(foreignTokenName)) continue;
        assert.equal(
          cssText.includes(foreignTokenRef),
          false,
          `${fixture.cssFilename} should not define or consume foreign token ${foreignTokenRef}`,
        );
      }
    }
  }
});

test("T2: fused semantic CSS token ownership remains outside lander-theme", () => {
  for (const fixture of semanticTokenFixtures) {
    const ownPrefix = `--${fixture.tokenPrefix}`;
    assert.equal(
      landerThemeCss.includes(ownPrefix),
      false,
      `lander-theme should not own fused semantic token family ${ownPrefix}`,
    );
  }
});

test("T2: root token contract provides light and dark defaults for shared fonts and surfaces", () => {
  assert.ok(rootCss.includes('--mdwrk-font-ui: "Atkinson Hyperlegible"'), "root.css should default UI typography to Atkinson Hyperlegible");
  assert.ok(rootCss.includes('[data-lander-theme="lander-light"]'), "root.css should define light theme defaults");
  assert.ok(rootCss.includes('[data-lander-theme="lander-dark"]'), "root.css should define dark theme defaults");
  for (const tokenName of [
    "--mdwrk-color-bg",
    "--mdwrk-color-bg-panel",
    "--mdwrk-color-text",
    "--mdwrk-color-border",
    "--mdwrk-color-accent",
  ]) {
    assert.ok(rootCss.includes(tokenName), `root.css should define ${tokenName}`);
  }
});
