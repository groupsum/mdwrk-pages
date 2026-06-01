import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { importLanderReactDist } from "./load-dist.mjs";
import { generatedPassThroughArtifacts, propsForGeneratedArtifact, sampleForGeneratedArtifact } from "../../../../tests/generated-schemaorg-artifact-helpers.mjs";

const typeArtifacts = generatedPassThroughArtifacts.filter((artifact) => artifact.kind === "type");

function extractJsonLd(markup) {
  const match = markup.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  assert.ok(match?.[1], "Rendered markup must contain a JSON-LD payload");
  return JSON.parse(match[1]);
}

test("T0: generated type components accept direct schema field props, apply className, and render visible shells", async () => {
  const semantic = await importLanderReactDist();
  const renderableArtifacts = typeArtifacts.flatMap((artifact) => {
    try {
      return [{ artifact, sample: sampleForGeneratedArtifact(artifact) }];
    } catch {
      return [];
    }
  });

  for (const { artifact, sample } of renderableArtifacts) {
    const Component = semantic[artifact.visibleExportName];
    assert.equal(typeof Component, "function", `missing generated type export ${artifact.visibleExportName}`);

    const props = propsForGeneratedArtifact(artifact, sample);
    const markup = renderToStaticMarkup(React.createElement(Component, { ...props, className: "generated-probe" }));

    assert.ok(markup.includes(artifact.shellSelector.slice(1)), `${artifact.visibleExportName} should render its shell class`);
    assert.ok(markup.includes("generated-probe"), `${artifact.visibleExportName} should apply caller className`);

    extractJsonLd(markup);
  }
});
