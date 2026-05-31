import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { importLanderReactDist } from "./load-dist.mjs";
import { semanticFixtures } from "./semantic-fixtures.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..", "..", "..", "..");
const contractDistEntry = pathToFileURL(
  path.join(repoRoot, "packages", "contracts", "lander-content-contract", "dist", "index.js"),
).href;

test("T1: fused semantic components emit generator-conformant JSON-LD at the public authoring surface", async () => {
  const mod = await importLanderReactDist();
  const { validateStructuredDataByType } = await import(contractDistEntry);

  for (const fixture of semanticFixtures) {
    const markup = renderToStaticMarkup(React.createElement(mod[fixture.name], fixture.props));
    const payload = extractJsonLd(markup);

    assert.deepEqual(
      validateStructuredDataByType(fixture.expectedType, payload),
      [],
      `${fixture.name} rendered JSON-LD must satisfy the governed Schema.org contract`,
    );
  }
});

test("T1: fused semantic components do not leak repo-local helper props into emitted JSON-LD", async () => {
  const mod = await importLanderReactDist();
  const searchResultsMarkup = renderToStaticMarkup(
    React.createElement(mod.SearchResultsPage, {
      name: "Search results",
      description: "Query matches.",
      query: "prompt delivery",
      results: [{ name: "Prompt Studio", summary: "Product page." }],
    }),
  );
  const searchResultsPayload = extractJsonLd(searchResultsMarkup);
  assert.equal("query" in searchResultsPayload, false);

  const solveMathMarkup = renderToStaticMarkup(
    React.createElement(mod.SolveMathAction, {
      target: "https://mdwrk.test/math",
      mathExpressionInput: "x+2=4",
    }),
  );
  const solveMathPayload = extractJsonLd(solveMathMarkup);
  assert.equal("mathExpressionInput" in solveMathPayload, false);
  assert.equal("mathExpression-input" in solveMathPayload, false);

  const memberProgramMarkup = renderToStaticMarkup(
    React.createElement(mod.MemberProgram, {
      name: "Prompt Pro",
      provider: "MDWRK",
    }),
  );
  const memberProgramPayload = extractJsonLd(memberProgramMarkup);
  assert.equal("provider" in memberProgramPayload, false);
});

function extractJsonLd(markup) {
  const match = markup.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  assert.ok(match?.[1], "Rendered markup must contain a JSON-LD script payload");
  return JSON.parse(match[1]);
}
