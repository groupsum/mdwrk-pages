import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { importStructuredDataReactDist } from "./load-dist.mjs";
import { defaultDataForKind } from "./intent-fixtures.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..", "..", "..", "..");
const contractDistEntry = pathToFileURL(
  path.join(repoRoot, "packages", "contracts", "lander-content-contract", "dist", "index.js"),
).href;

test("T1: every rendered JSON-LD intent conforms to the generator-backed Schema.org contract", async () => {
  const mod = await importStructuredDataReactDist();
  const { validateStructuredDataByType } = await import(contractDistEntry);
  const { SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS, renderStructuredDataIntent } = mod;

  const renderableKinds = SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS.filter((kind) => {
    try {
      defaultDataForKind(kind);
      return true;
    } catch {
      return false;
    }
  });

  assert.ok(renderableKinds.length >= 200, "expected broad schema-conformance coverage across the fused registry");

  for (const kind of renderableKinds) {
    const markup = renderToStaticMarkup(
      renderStructuredDataIntent({
        id: `intent:${kind.toLowerCase()}`,
        kind,
        pagePath: "/registry/",
        source: "schema",
        data: defaultDataForKind(kind),
      }),
    );
    const payload = extractJsonLd(markup);
    assert.deepEqual(
      validateStructuredDataByType(kind, payload),
      [],
      `${kind} rendered payload must satisfy the generator-backed Schema.org contract`,
    );
  }
});

test("T1: rendered JSON-LD preserves extra schema-valid properties beyond curated wrapper fixtures", async () => {
  const mod = await importStructuredDataReactDist();
  const { validateStructuredDataByType } = await import(contractDistEntry);
  const { renderStructuredDataIntent } = mod;

  const markup = renderToStaticMarkup(
    renderStructuredDataIntent({
      id: "intent:article-passthrough",
      kind: "Article",
      pagePath: "/registry/",
      source: "schema",
      data: {
        ...defaultDataForKind("Article"),
        keywords: ["schema", "json-ld"],
        inLanguage: "en",
      },
    }),
  );

  const payload = extractJsonLd(markup);
  assert.deepEqual(payload.keywords, ["schema", "json-ld"]);
  assert.equal(payload.inLanguage, "en");
  assert.deepEqual(validateStructuredDataByType("Article", payload), []);
});

test("T1: rendered JSON-LD drops repo-local authored helper fields while preserving schema-valid output", async () => {
  const mod = await importStructuredDataReactDist();
  const { validateStructuredDataByType } = await import(contractDistEntry);
  const { renderStructuredDataIntent } = mod;

  const searchMarkup = renderToStaticMarkup(
    renderStructuredDataIntent({
      id: "intent:search-results-policy",
      kind: "SearchResultsPage",
      pagePath: "/registry/",
      source: "schema",
      data: {
        ...defaultDataForKind("SearchResultsPage"),
        query: "prompt delivery",
      },
    }),
  );
  const searchPayload = extractJsonLd(searchMarkup);
  assert.equal("query" in searchPayload, false);
  assert.deepEqual(validateStructuredDataByType("SearchResultsPage", searchPayload), []);

  const solveMathMarkup = renderToStaticMarkup(
    renderStructuredDataIntent({
      id: "intent:solve-math-policy",
      kind: "SolveMathAction",
      pagePath: "/registry/",
      source: "schema",
      data: defaultDataForKind("SolveMathAction"),
    }),
  );
  const solveMathPayload = extractJsonLd(solveMathMarkup);
  assert.equal("mathExpressionInput" in solveMathPayload, false);
  assert.equal("mathExpression-input" in solveMathPayload, false);
  assert.deepEqual(validateStructuredDataByType("SolveMathAction", solveMathPayload), []);

  const memberProgramMarkup = renderToStaticMarkup(
    renderStructuredDataIntent({
      id: "intent:member-program-policy",
      kind: "MemberProgram",
      pagePath: "/registry/",
      source: "schema",
      data: {
        ...defaultDataForKind("MemberProgram"),
        provider: { "@type": "Organization", name: "MdWrk" },
      },
    }),
  );
  const memberProgramPayload = extractJsonLd(memberProgramMarkup);
  assert.equal("provider" in memberProgramPayload, false);
  assert.deepEqual(validateStructuredDataByType("MemberProgram", memberProgramPayload), []);
});

function extractJsonLd(markup) {
  const match = markup.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  assert.ok(match?.[1], "Rendered markup must contain a JSON-LD script payload");
  return JSON.parse(match[1]);
}
