import {
  getStructuredDataSchemaAssetMap,
  getStructuredDataSchemaByType,
  listStructuredDataSchemas,
  validateStructuredDataByType,
} from "../packages/contracts/lander-content-contract/dist/index.js";
import { GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS } from "../packages/contracts/lander-content-contract/dist/generated-schemaorg-page-family-metadata.js";
import { semanticFixtures } from "../packages/ui/lander-react/tests/semantic-fixtures.mjs";

export const foundationalGeneratedTypes = Object.freeze([
  "Thing",
  "CreativeWork",
  "BreadcrumbList",
  "ListItem",
  "Offer",
  "Place",
  "MonetaryAmount",
  "Action",
  "ReadAction",
]);

export const foundationalGeneratedProperties = Object.freeze([
  "about",
  "potentialAction",
  "offers",
  "address",
  "itemListElement",
]);

export const generatedArtifacts = GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS;
export const governedCoreTypeNames = new Set(semanticFixtures.map((fixture) => fixture.name));
export const generatedPassThroughArtifacts = generatedArtifacts.filter(
  (artifact) => artifact.kind !== "type" || !governedCoreTypeNames.has(artifact.name),
);

export function cloneJsonLike(value) {
  return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
}

export function deepFreeze(value) {
  if (!value || typeof value !== "object") return value;
  Object.freeze(value);
  for (const nested of Object.values(value)) {
    if (nested && typeof nested === "object" && !Object.isFrozen(nested)) deepFreeze(nested);
  }
  return value;
}

const structuredDataAssetMap = getStructuredDataSchemaAssetMap();
const supportedObjectKinds = listStructuredDataSchemas()
  .map((entry) => entry.type)
  .filter((entry) => /^[A-Z]/u.test(entry));

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
  if (!schema || typeof schema !== "object" || seen.has(visitKey)) return undefined;
  seen.add(visitKey);

  if (typeof schema.$ref === "string") {
    const nextAssetPath = resolveAssetPath(assetPath, schema.$ref);
    return sampleForResolvedSchema(nextAssetPath, structuredDataAssetMap[nextAssetPath], kind, seen);
  }
  if (schema.const !== undefined) return schema.const;
  if (Array.isArray(schema.enum) && schema.enum.length > 0) return schema.enum[0];
  if (Array.isArray(schema.oneOf) && schema.oneOf.length) return sampleForResolvedSchema(assetPath, schema.oneOf[0], kind, seen);
  if (Array.isArray(schema.anyOf) && schema.anyOf.length) return sampleForResolvedSchema(assetPath, schema.anyOf[0], kind, seen);
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

function defaultTypeOverlay(artifact, value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return value;
  const slug = artifact.slug ?? artifact.name.toLowerCase();
  return {
    ...value,
    name: value.name ?? `${artifact.name} sample`,
    description: value.description ?? `${artifact.name} generated demo sample.`,
    url: value.url ?? `https://mdwrk.test/schema/${slug}`,
  };
}

export function sampleForGeneratedArtifact(artifact) {
  const entry = getStructuredDataSchemaByType(artifact.name);
  if (!entry) throw new Error(`Missing structured-data schema for ${artifact.name}`);
  const entryAssetPath = assetKeyFromEntryAssetPath(entry.assetPath);
  const sample = sampleForResolvedSchema(entryAssetPath, entry.schema, artifact.name);
  const candidates = [
    artifact.kind === "type" ? defaultTypeOverlay(artifact, sample) : sample,
    artifact.kind === "datatype" ? true : undefined,
    artifact.kind === "datatype" && artifact.name !== "Boolean" ? 1 : undefined,
    artifact.kind === "datatype" ? `${artifact.name} sample` : undefined,
    artifact.kind === "enumeration" ? artifact.name : undefined,
    artifact.kind === "property" ? { name: `${artifact.name} sample`, value: artifact.name } : undefined,
    artifact.kind === "type" ? { "@type": artifact.name, name: `${artifact.name} sample` } : undefined,
    `${artifact.name} sample`,
  ].filter((value) => value !== undefined);

  for (const candidate of candidates) {
    if (validateStructuredDataByType(artifact.name, candidate).length === 0) return candidate;
  }

  if (artifact.kind === "property") {
    for (const candidateKind of supportedObjectKinds) {
      const candidate = { "@type": candidateKind, name: `${candidateKind} sample` };
      if (validateStructuredDataByType(artifact.name, candidate).length === 0) return candidate;
    }
  }

  throw new Error(`Unable to derive generated sample for ${artifact.name}`);
}

export function propsForGeneratedArtifact(artifact, value = sampleForGeneratedArtifact(artifact)) {
  if (
    (artifact.kind === "type" || artifact.kind === "property") &&
    value &&
    typeof value === "object" &&
    !Array.isArray(value)
  ) {
    return value;
  }

  return { value };
}

export function generatedArtifactsByKind(kind) {
  return generatedArtifacts.filter((artifact) => artifact.kind === kind);
}
