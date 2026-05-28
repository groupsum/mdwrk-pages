import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "../../../packages/ui/lander-react/tests/load-dist.mjs";
import { showcaseEntries } from "../src/showcase-catalog.mjs";

const landerReact = await importLanderReactDist();

test("T1: every showcased semantic component renders visible markup and emits JSON-LD by default", () => {
  for (const entry of showcaseEntries) {
    const Component = landerReact[entry.name];
    assert.equal(typeof Component, "function", `expected ${entry.name} export`);
    const markup = renderToStaticMarkup(React.createElement(Component, { ...entry.props, className: "probe-card" }));
    assert.ok(markup.includes("application/ld+json"), `expected JSON-LD emission for ${entry.name}`);
    for (const phrase of entry.visible) {
      assert.ok(markup.includes(phrase), `expected visible phrase ${phrase} for ${entry.name}`);
    }
  }
});
