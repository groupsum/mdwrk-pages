import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { importStructuredDataReactDist } from "./load-dist.mjs";
import {
  cloneJsonLike,
  deepFreeze,
  generatedPassThroughArtifacts,
  sampleForGeneratedArtifact,
} from "../../../../tests/generated-schemaorg-artifact-helpers.mjs";

function extractJsonLd(markup) {
  const match = markup.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  assert.ok(match?.[1], "Rendered wrapper markup must include a JSON-LD payload");
  return JSON.parse(match[1]);
}

test("T2: generated structured-data wrappers stay deterministic and do not mutate frozen promoted artifact payloads", async () => {
  const mod = await importStructuredDataReactDist();
  const renderableArtifacts = generatedPassThroughArtifacts.flatMap((artifact) => {
    try {
      return [{ artifact, sample: sampleForGeneratedArtifact(artifact) }];
    } catch {
      return [];
    }
  });

  for (const { artifact, sample } of renderableArtifacts) {
    const Component = mod[artifact.wrapperExportName];
    const baseline = cloneJsonLike(sample);
    deepFreeze(sample);

    const firstMarkup = renderToStaticMarkup(React.createElement(Component, { data: sample }));
    const secondMarkup = renderToStaticMarkup(React.createElement(Component, { data: sample }));

    assert.equal(firstMarkup, secondMarkup, `${artifact.wrapperExportName} should render deterministically`);
    assert.deepEqual(extractJsonLd(firstMarkup), extractJsonLd(secondMarkup));
    assert.deepEqual(sample, baseline, `${artifact.wrapperExportName} should not mutate frozen input`);
  }
});
