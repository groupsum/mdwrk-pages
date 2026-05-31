import assert from "node:assert/strict";
import test from "node:test";

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import {
  getStructuredDataSchemaAssetMap,
  getStructuredDataSchemaByType,
  validateStructuredDataByType,
} from "../../../contracts/lander-content-contract/dist/index.js";
import { GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS } from "../../../contracts/lander-content-contract/dist/generated-schemaorg-page-family-metadata.js";

import { importLanderReactDist } from "./load-dist.mjs";
import { semanticNames } from "./semantic-fixtures.mjs";

const governedCoreKindNames = new Set(semanticNames);
const generatedFamilyArtifacts = GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS.filter(
  (artifact) => artifact.kind !== "type" || !governedCoreKindNames.has(artifact.name),
);
const structuredDataAssetMap = getStructuredDataSchemaAssetMap();
const renderableGeneratedFamilyArtifacts = generatedFamilyArtifacts.flatMap((artifact) => {
  try {
    return [{ artifact, value: dataForGeneratedArtifact(artifact) }];
  } catch {
    return [];
  }
});

function extractJsonLd(markup) {
  const match = markup.match(/<script type="application\/ld\+json">([^<]+)<\/script>/u);
  return match ? JSON.parse(match[1]) : null;
}

function assetKeyFromEntryAssetPath(assetPath) {
  return assetPath.replace(/^\.\/schemas\//u, "");
}

function resolveAssetPath(currentAssetPath, ref) {
  const currentDir = currentAssetPath.split("/").slice(0, -1).join("/");
  const combined = currentDir ? `${currentDir}/${ref}` : ref;
  return combined.split("/").reduce((parts, segment) => {
    if (!segment || segment === ".") return parts;
    if (segment === "..") {
      parts.pop();
      return parts;
    }
    parts.push(segment);
    return parts;
  }, []).join("/");
}

function sampleForResolvedSchema(assetPath, schema, kind, seen = new Set()) {
  const visitKey = `${assetPath}::${schema?.$id ?? schema?.title ?? kind}`;
  if (seen.has(visitKey)) return undefined;
  seen.add(visitKey);

  if (!schema || typeof schema !== "object") return undefined;
  if (typeof schema.$ref === "string") {
    const nextAssetPath = resolveAssetPath(assetPath, schema.$ref);
    return sampleForResolvedSchema(nextAssetPath, structuredDataAssetMap[nextAssetPath], kind, seen);
  }
  if (schema.const !== undefined) return schema.const;
  if (Array.isArray(schema.enum) && schema.enum.length > 0) return schema.enum[0];
  if (Array.isArray(schema.oneOf) && schema.oneOf.length) {
    return sampleForResolvedSchema(assetPath, schema.oneOf[0], kind, seen);
  }
  if (Array.isArray(schema.anyOf) && schema.anyOf.length) {
    return sampleForResolvedSchema(assetPath, schema.anyOf[0], kind, seen);
  }
  if (Array.isArray(schema.allOf) && schema.allOf.length) {
    const branchValues = schema.allOf
      .map((branch) => sampleForResolvedSchema(assetPath, branch, kind, seen))
      .filter((value) => value !== undefined);
    const objectValues = branchValues.filter((value) => value && typeof value === "object" && !Array.isArray(value));
    if (objectValues.length) return Object.assign({}, ...objectValues);
    return branchValues[0];
  }
  if (schema.type === "boolean") return true;
  if (schema.type === "number" || schema.type === "integer") return 1;
  if (schema.type === "string") return `${kind} sample`;
  if (schema.type === "array") {
    return [sampleForResolvedSchema(assetPath, schema.items ?? {}, kind, seen)].filter((value) => value !== undefined);
  }
  if (schema.type === "object" || schema.properties) {
    const result = {};
    for (const key of schema.required ?? []) {
      if (key === "@context") {
        result[key] = "https://schema.org";
        continue;
      }
      const propertySchema = schema.properties?.[key];
      const value = sampleForResolvedSchema(assetPath, propertySchema ?? {}, kind, seen);
      if (value !== undefined) result[key] = value;
    }
    if (schema.properties?.["@type"]?.const && result["@type"] === undefined) result["@type"] = schema.properties["@type"].const;
    if (schema.properties?.name && result.name === undefined) result.name = kind;
    if (schema.properties?.text && result.text === undefined) result.text = `${kind} sample`;
    return result;
  }
  return undefined;
}

function dataForGeneratedArtifact(artifact) {
  const kind = artifact.name;
  const entry = getStructuredDataSchemaByType(kind);
  if (entry) {
    const entryAssetPath = assetKeyFromEntryAssetPath(entry.assetPath);
    const sample = sampleForResolvedSchema(entryAssetPath, entry.schema, kind);
    if (sample !== undefined && validateStructuredDataByType(kind, sample).length === 0) return sample;
  }
  const candidates = artifact.kind === "datatype"
    ? [
      kind === "Boolean" ? true : undefined,
      kind === "Number" || kind === "Quantity" ? 1 : undefined,
      kind === "Date" ? "2026-05-31" : undefined,
      kind === "DateTime" ? "2026-05-31T12:00:00Z" : undefined,
      kind === "Time" ? "12:00:00Z" : undefined,
      `${kind} sample`,
    ]
    : artifact.kind === "enumeration"
      ? [kind, `${kind} sample`]
      : [
        { "@type": kind, name: `${kind} sample` },
        { "@type": "Thing", name: `${kind} sample` },
        { "@type": "CreativeWork", name: `${kind} sample` },
        { "@type": "DefinedRegion", name: `${kind} sample` },
        { "@type": "QuantitativeValue", value: 1 },
        { name: `${kind} sample` },
        `${kind} sample`,
        [`${kind} sample`],
        [["Text", "Visual"]],
        ["Text", "Visual"],
        [{ "@type": "Thing", name: `${kind} sample` }],
        1,
        true,
      ];

  for (const candidate of candidates.filter((value) => value !== undefined)) {
    if (validateStructuredDataByType(kind, candidate).length === 0) return candidate;
  }

  throw new Error(`Unable to derive generated family fixture for ${kind}`);
}

test("T1: generated fused semantic families render visible markup, accept className, and emit conformant JSON-LD", async () => {
  assert.ok(generatedFamilyArtifacts.length > 0, "expected generated family artifacts beyond the governed core");
  const renderableByKind = new Map(["type", "datatype", "enumeration", "property"].map((kind) => [kind, 0]));
  for (const { artifact } of renderableGeneratedFamilyArtifacts) {
    renderableByKind.set(artifact.kind, (renderableByKind.get(artifact.kind) ?? 0) + 1);
  }
  assert.ok((renderableByKind.get("type") ?? 0) >= 10, "expected broad generated type-family coverage");
  assert.ok((renderableByKind.get("datatype") ?? 0) >= 7, "expected full generated datatype-family coverage");
  assert.ok((renderableByKind.get("enumeration") ?? 0) >= 10, "expected broad generated enumeration-family coverage");
  assert.ok((renderableByKind.get("property") ?? 0) >= 100, "expected broad generated property-family coverage");
  const semantic = await importLanderReactDist();

  for (const { artifact, value } of renderableGeneratedFamilyArtifacts) {
    const Component = semantic[artifact.visibleExportName];
    assert.equal(typeof Component, "function", `missing generated semantic export ${artifact.visibleExportName}`);
    const markup = renderToStaticMarkup(
      React.createElement(Component, {
        value,
        className: "generated-probe",
      }),
    );

    assert.ok(markup.includes(artifact.shellSelector.slice(1)), `${artifact.visibleExportName} should render its shell class`);
    assert.ok(markup.includes("generated-probe"), `${artifact.visibleExportName} should apply caller className`);

    const jsonLd = extractJsonLd(markup);
    assert.ok(jsonLd !== null, `${artifact.visibleExportName} should emit JSON-LD by default`);
    assert.deepEqual(
      validateStructuredDataByType(artifact.name, jsonLd),
      [],
      `${artifact.visibleExportName} should emit schema-conformant JSON-LD`,
    );
  }
});
