import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "./load-dist.mjs";
import { semanticFixtures } from "./semantic-fixtures.mjs";

function jsonLdScripts(markup) {
  return [...markup.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
}

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

test("T1: semantic structured data graph collects component JSON-LD into one page-level script", async () => {
  const mod = await importLanderReactDist();
  const markup = renderToStaticMarkup(
    React.createElement(
      mod.SemanticStructuredDataGraph,
      { id: "https://mdwrk.test/#jsonld" },
      React.createElement(mod.Course, { name: "Prompt Delivery 101", provider: { name: "MDWRK" } }),
      React.createElement(mod.Organization, { name: "MDWRK", url: "https://mdwrk.test/" }),
      React.createElement(mod.Product, { name: "Prompt Delivery Studio", price: 49, priceCurrency: "USD" }),
    ),
  );

  const scripts = jsonLdScripts(markup);
  assert.equal(scripts.length, 1, "collector must emit a single JSON-LD script");
  assert.equal(scripts[0]["@id"], "https://mdwrk.test/#jsonld");
  assert.equal(Array.isArray(scripts[0]["@graph"]), true);
  assert.deepEqual(
    scripts[0]["@graph"].map((node) => node["@type"]).sort(),
    ["Course", "Organization", "Product"],
  );
  assert.equal(markup.includes("Prompt Delivery 101"), true);
  assert.equal(markup.includes("Prompt Delivery Studio"), true);

  const fallbackMarkup = renderToStaticMarkup(
    React.createElement(mod.Course, { name: "Prompt Delivery 101", provider: { name: "MDWRK" } }),
  );
  assert.equal(jsonLdScripts(fallbackMarkup).length, 1, "components must still emit local JSON-LD without a collector");
});
