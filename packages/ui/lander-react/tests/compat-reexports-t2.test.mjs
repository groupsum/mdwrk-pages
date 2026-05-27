import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "./load-dist.mjs";
import { importStructuredDataReactDist } from "../../../machine/lander-react-structured-data/tests/load-dist.mjs";

function captureWarnings() {
  const warnings = [];
  const originalWarn = console.warn;
  console.warn = (message, ...rest) => {
    warnings.push([message, ...rest].join(" "));
  };
  return {
    warnings,
    restore() {
      console.warn = originalWarn;
    },
  };
}

const faqIntent = {
  kind: "FAQPage",
  data: {
    items: [{ question: "What changed?", answer: "Structured data moved into its own renderer package." }],
  },
};

test("T2: compat warnings emit once per export and compat rendering stays deterministic", async () => {
  const landerReact = await importLanderReactDist();
  const structuredDataReact = await importStructuredDataReactDist();
  const warningCapture = captureWarnings();

  try {
    const first = renderToStaticMarkup(landerReact.renderStructuredDataIntent(faqIntent));
    const second = renderToStaticMarkup(landerReact.renderStructuredDataIntent(faqIntent));
    assert.equal(second, first);

    const direct = renderToStaticMarkup(structuredDataReact.renderStructuredDataIntent(faqIntent));
    assert.equal(first, direct);

    const registryKeys = Object.keys(landerReact.landerStructuredDataIntentRegistry);
    const supportedKinds = [...landerReact.SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS];
    assert.deepEqual(supportedKinds, structuredDataReact.SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS);
    assert.deepEqual(registryKeys, Object.keys(structuredDataReact.landerStructuredDataIntentRegistry));

    void landerReact.landerStructuredDataIntentRegistry.WebPage;
    void landerReact.landerStructuredDataIntentRegistry.WebPage;
    void landerReact.SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS[0];
    void landerReact.SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS[0];
  } finally {
    warningCapture.restore();
  }

  const renderWarnings = warningCapture.warnings.filter((entry) => entry.includes("renderStructuredDataIntent"));
  const registryWarnings = warningCapture.warnings.filter((entry) => entry.includes("landerStructuredDataIntentRegistry"));
  const supportedWarnings = warningCapture.warnings.filter((entry) =>
    entry.includes("SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS"),
  );

  assert.equal(renderWarnings.length, 1);
  assert.equal(registryWarnings.length, 1);
  assert.equal(supportedWarnings.length, 1);
});
