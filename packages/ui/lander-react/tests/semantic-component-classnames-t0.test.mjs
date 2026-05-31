import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "./load-dist.mjs";
import { semanticFixtures, semanticNames } from "./semantic-fixtures.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const semanticDir = path.join(packageRoot, "dist", "semantic");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function extractShellClass(markup) {
  const match = markup.match(/<(?:article|section|nav|aside|div) class="([^"]*lander-semantic[^"]*)"/u);
  assert.ok(match, "expected semantic shell class");
  return match[1];
}

test("T0: fused semantic component declarations expose className on the public API for all governed core kinds", () => {
  for (const fileName of fs.readdirSync(semanticDir)) {
    if (!fileName.endsWith(".d.ts") || fileName === "index.d.ts") continue;
    const dts = read(path.join(semanticDir, fileName));
    assert.match(dts, /className\?: string;/, `${fileName} should expose className`);
  }
});

test("T0: fused semantic components apply caller className to the visible shell for all governed core kinds", async () => {
  const mod = await importLanderReactDist();

  for (const fixture of semanticFixtures) {
    assert.ok(semanticNames.includes(fixture.name));
    const shellClass = `${fixture.name.toLowerCase()}-shell`;
    const markup = renderToStaticMarkup(
      React.createElement(mod[fixture.name], {
        ...fixture.props,
        className: shellClass,
      }),
    );
    const classAttr = extractShellClass(markup);
    assert.ok(classAttr.includes("lander-semantic"), `${fixture.name} should include lander-semantic`);
    assert.ok(classAttr.includes(shellClass), `${fixture.name} should include caller className`);
  }
});
