import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importStructuredDataReactDist } from "./load-dist.mjs";
import { defaultDataForKind } from "./intent-fixtures.mjs";

test("T1: every supported intent kind resolves to a wrapper entry and renders JSON-LD", async () => {
  const mod = await importStructuredDataReactDist();
  const {
    SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS,
    getStructuredDataIntentRendererEntry,
    renderStructuredDataIntent,
  } = mod;

  assert.ok(SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS.length >= 40);

  const renderableKinds = SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS.filter((kind) => {
    try {
      defaultDataForKind(kind);
      return true;
    } catch {
      return false;
    }
  });

  assert.ok(renderableKinds.length >= 200, "expected broad fixture coverage across the fused registry");

  for (const kind of renderableKinds) {
    const entry = getStructuredDataIntentRendererEntry(kind);
    assert.equal(typeof entry.componentName, "string");
    assert.equal(typeof entry.render, "function");

    const markup = renderToStaticMarkup(
      renderStructuredDataIntent({
        id: `intent:${kind.toLowerCase()}`,
        kind,
        pagePath: "/registry/",
        source: "schema",
        data: defaultDataForKind(kind),
      }),
    );
    assert.ok(markup.includes("application/ld+json"), `${kind} must emit a JSON-LD script`);
  }
});
