import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "./load-dist.mjs";
import { semanticFixtures } from "./semantic-fixtures.mjs";

function extractShellClass(markup) {
  const match = markup.match(/<(?:article|section|nav|aside|div) class="([^"]*lander-semantic[^"]*)"/u);
  assert.ok(match, "expected semantic shell class");
  return match[1];
}

test("T1: fused semantic className support composes with semantic props, overrides, and JSON-LD emission settings for all governed core kinds", async () => {
  const mod = await importLanderReactDist();

  for (const fixture of semanticFixtures) {
    const shellClass = `${fixture.name.toLowerCase()}-shell`;
    const overrideMarkup = renderToStaticMarkup(
      React.createElement(mod[fixture.name], {
        ...fixture.props,
        className: shellClass,
        structuredDataOverrides: fixture.override,
      }),
    );
    const classAttr = extractShellClass(overrideMarkup);
    assert.ok(classAttr.includes(shellClass), `${fixture.name} should preserve className with overrides`);
    assert.ok(overrideMarkup.includes(fixture.overrideSnippet), `${fixture.name} should still emit override payload`);
    for (const snippet of fixture.visible) {
      assert.ok(overrideMarkup.includes(snippet), `${fixture.name} should keep visible snippet with overrides: ${snippet}`);
    }

    const hiddenMarkup = renderToStaticMarkup(
      React.createElement(mod[fixture.name], {
        ...fixture.props,
        className: shellClass,
        emitStructuredData: false,
      }),
    );
    const hiddenClass = extractShellClass(hiddenMarkup);
    assert.ok(hiddenClass.includes(shellClass), `${fixture.name} should preserve className when JSON-LD is hidden`);
    assert.equal(hiddenMarkup.includes("application/ld+json"), false, `${fixture.name} should suppress JSON-LD`);
    for (const snippet of fixture.visible) {
      assert.ok(hiddenMarkup.includes(snippet), `${fixture.name} should keep visible snippet with hidden JSON-LD: ${snippet}`);
    }
  }
});
