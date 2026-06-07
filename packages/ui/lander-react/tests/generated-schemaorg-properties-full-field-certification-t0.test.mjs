import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { importLanderReactDist } from "./load-dist.mjs";
import { generatedArtifactsByKind, propsForGeneratedArtifact, sampleForGeneratedArtifact } from "../../../../tests/generated-schemaorg-artifact-helpers.mjs";

const propertyArtifacts = generatedArtifactsByKind("property");

function extractJsonLd(markup) {
  const match = markup.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  assert.ok(match?.[1], "Rendered markup must contain a JSON-LD payload");
  return JSON.parse(match[1]);
}

test("T0: generated property components accept direct schema field props, apply className, and preserve payload shape", async () => {
  const semantic = await importLanderReactDist();
  const renderableArtifacts = propertyArtifacts.flatMap((artifact) => {
    try {
      return [{ artifact, sample: sampleForGeneratedArtifact(artifact) }];
    } catch {
      return [];
    }
  });

  for (const { artifact, sample } of renderableArtifacts) {
    const Component = semantic[artifact.visibleExportName];
    assert.equal(typeof Component, "function", `missing generated property export ${artifact.visibleExportName}`);

    const props = propsForGeneratedArtifact(artifact, sample);
    const markup = renderToStaticMarkup(React.createElement(Component, { ...props, className: "generated-probe" }));

    assert.ok(markup.includes(artifact.shellSelector.slice(1)), `${artifact.visibleExportName} should render its shell class`);
    assert.ok(markup.includes("generated-probe"), `${artifact.visibleExportName} should apply caller className`);

    const payload = extractJsonLd(markup);
    assert.equal(typeof Component.toStructuredData, "function", `${artifact.visibleExportName} should expose toStructuredData`);
    assert.deepEqual(Component.toStructuredData(props), payload, `${artifact.visibleExportName} toStructuredData should match emitted JSON-LD`);
    if (sample && typeof sample === "object" && !Array.isArray(sample)) {
      for (const key of Object.keys(sample)) {
        assert.ok(key in payload, `${artifact.visibleExportName} should preserve direct field ${key}`);
      }
    }
  }
});
