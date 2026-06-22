import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { importLanderReactDist } from "./load-dist.mjs";
import {
  cloneJsonLike,
  deepFreeze,
  generatedArtifactsByKind,
  propsForGeneratedArtifact,
  sampleForGeneratedArtifact,
} from "../../../../tests/generated-schemaorg-artifact-helpers.mjs";

const datatypeArtifacts = generatedArtifactsByKind("datatype");

function extractJsonLd(markup) {
  const match = markup.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  assert.ok(match?.[1], "Rendered markup must contain a JSON-LD payload");
  return JSON.parse(match[1]);
}

test("T2: generated datatype components stay deterministic and do not mutate frozen value props", async () => {
  const semantic = await importLanderReactDist();

  for (const artifact of datatypeArtifacts) {
    const Component = semantic[artifact.visibleExportName];
    const props = propsForGeneratedArtifact(artifact, sampleForGeneratedArtifact(artifact));
    const baseline = cloneJsonLike(props);
    deepFreeze(props);

    const firstStructuredData = Component.toStructuredData(props);
    const secondStructuredData = Component.toStructuredData(props);
    const firstMarkup = renderToStaticMarkup(React.createElement(Component, props));
    const secondMarkup = renderToStaticMarkup(React.createElement(Component, props));

    assert.deepEqual(firstStructuredData, secondStructuredData, `${artifact.visibleExportName} toStructuredData should be deterministic`);
    assert.deepEqual(firstStructuredData, extractJsonLd(firstMarkup), `${artifact.visibleExportName} toStructuredData should match rendered JSON-LD`);
    assert.equal(firstMarkup, secondMarkup, `${artifact.visibleExportName} should render deterministically`);
    assert.deepEqual(extractJsonLd(firstMarkup), extractJsonLd(secondMarkup));
    assert.deepEqual(props, baseline, `${artifact.visibleExportName} should not mutate frozen props`);
  }
});
