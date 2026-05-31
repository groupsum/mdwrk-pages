import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "./load-dist.mjs";
import { semanticFixtures } from "./semantic-fixtures.mjs";

test("T1: fused semantic components keep visible props authoritative while overrides stay emitter-only", async () => {
  const mod = await importLanderReactDist();

  for (const fixture of semanticFixtures) {
    const overrideMarkup = renderToStaticMarkup(
      React.createElement(mod[fixture.name], {
        ...fixture.props,
        structuredDataOverrides: fixture.override,
      }),
    );

    for (const snippet of fixture.visible) {
      assert.ok(overrideMarkup.includes(snippet), `${fixture.name} must keep visible snippet after override: ${snippet}`);
    }
    assert.ok(
      overrideMarkup.includes(fixture.overrideSnippet),
      `${fixture.name} must emit override snippet ${fixture.overrideSnippet}`,
    );

    const hiddenMarkup = renderToStaticMarkup(
      React.createElement(mod[fixture.name], {
        ...fixture.props,
        emitStructuredData: false,
      }),
    );
    assert.equal(hiddenMarkup.includes("application/ld+json"), false, `${fixture.name} must suppress JSON-LD`);
    for (const snippet of fixture.visible) {
      assert.ok(hiddenMarkup.includes(snippet), `${fixture.name} must still render visible snippet when JSON-LD is hidden: ${snippet}`);
    }
  }
});
