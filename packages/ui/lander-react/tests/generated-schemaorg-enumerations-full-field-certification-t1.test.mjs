import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { validateStructuredDataByType } from "../../../contracts/lander-content-contract/dist/index.js";
import { importLanderReactDist } from "./load-dist.mjs";
import { generatedArtifactsByKind, propsForGeneratedArtifact } from "../../../../tests/generated-schemaorg-artifact-helpers.mjs";

const enumerationArtifacts = generatedArtifactsByKind("enumeration");

function extractJsonLd(markup) {
  const match = markup.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  assert.ok(match?.[1], "Rendered markup must contain a JSON-LD payload");
  return JSON.parse(match[1]);
}

function extractJsonLdScripts(markup) {
  return [...markup.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((match) => JSON.parse(match[1]));
}

test("T1: generated enumeration components emit schema-conformant JSON-LD", async () => {
  const semantic = await importLanderReactDist();

  for (const artifact of enumerationArtifacts) {
    const Component = semantic[artifact.visibleExportName];
    const payload = extractJsonLd(renderToStaticMarkup(React.createElement(Component, propsForGeneratedArtifact(artifact))));
    assert.deepEqual(validateStructuredDataByType(artifact.name, payload), [], `${artifact.visibleExportName} should emit schema-conformant JSON-LD`);
  }
});

test("T1: generated enumeration primitive payloads retain local JSON-LD inside graph boundaries", async () => {
  const semantic = await importLanderReactDist();
  const artifact = enumerationArtifacts[0];
  const Component = semantic[artifact.visibleExportName];
  const props = propsForGeneratedArtifact(artifact);
  const markup = renderToStaticMarkup(
    React.createElement(semantic.SemanticStructuredDataGraph, null, React.createElement(Component, props)),
  );
  const scripts = extractJsonLdScripts(markup);

  assert.equal(scripts.length, 1, `${artifact.visibleExportName} primitive payload should keep local JSON-LD`);
  assert.deepEqual(scripts[0], Component.toStructuredData(props));
});
