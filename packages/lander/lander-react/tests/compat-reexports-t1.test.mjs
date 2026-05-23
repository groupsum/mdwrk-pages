import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "./load-dist.mjs";
import { importStructuredDataReactDist } from "../../lander-react-structured-data/tests/load-dist.mjs";

function withCapturedWarnings(run) {
  const warnings = [];
  const originalWarn = console.warn;
  console.warn = (message, ...rest) => {
    warnings.push([message, ...rest].join(" "));
  };
  return Promise.resolve()
    .then(run)
    .finally(() => {
      console.warn = originalWarn;
    })
    .then((result) => ({ result, warnings }));
}

const webPageData = {
  name: "MdWrk",
  description: "Portable lander renderer",
  url: "https://mdwrk.test/",
};

const intent = {
  kind: "WebPage",
  data: webPageData,
};

test("T1: compat structured-data exports render the same output as the direct package", async () => {
  const landerReact = await importLanderReactDist();
  const structuredDataReact = await importStructuredDataReactDist();

  const { warnings } = await withCapturedWarnings(() => {
    const compatMarkup = renderToStaticMarkup(
      React.createElement(landerReact.WebPageStructuredData, { data: webPageData }),
    );
    const directMarkup = renderToStaticMarkup(
      React.createElement(structuredDataReact.WebPageStructuredData, { data: webPageData }),
    );
    assert.equal(compatMarkup, directMarkup);

    const compatIntentMarkup = renderToStaticMarkup(landerReact.renderStructuredDataIntent(intent));
    const directIntentMarkup = renderToStaticMarkup(structuredDataReact.renderStructuredDataIntent(intent));
    assert.equal(compatIntentMarkup, directIntentMarkup);

    const compatEntry = landerReact.getStructuredDataIntentRendererEntry("WebPage");
    const directEntry = structuredDataReact.getStructuredDataIntentRendererEntry("WebPage");
    assert.equal(compatEntry.componentName, directEntry.componentName);
  });

  assert.ok(warnings.some((entry) => entry.includes("WebPageStructuredData")));
  assert.ok(warnings.some((entry) => entry.includes("renderStructuredDataIntent")));
  assert.ok(warnings.some((entry) => entry.includes("@mdwrk/lander-react-structured-data")));
});
