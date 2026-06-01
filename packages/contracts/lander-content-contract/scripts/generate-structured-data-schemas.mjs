import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const generatedRoot = path.join(packageRoot, "schemas", "generated-schemaorg-page-family");
const generatedFullRoot = path.join(packageRoot, "schemas", "generated-schemaorg-full");
const generatedTypesRoot = path.join(generatedFullRoot, "types");
const structuredDataRoot = path.join(packageRoot, "schemas", "structured-data");
const generatedModulePath = path.join(packageRoot, "src", "generated-structured-data-schemas.ts");
const generatedMetadataModulePath = path.join(packageRoot, "src", "generated-schemaorg-page-family-metadata.ts");

const SPECIAL_SLUGS = new Map([
  ["FAQPage", "faq-page"],
  ["QAPage", "qa-page"],
  ["URL", "url"],
]);

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function sortNames(names) {
  return [...names].sort((left, right) => left.localeCompare(right, "en", { sensitivity: "base" }));
}

function toSlug(value) {
  const special = SPECIAL_SLUGS.get(value);
  if (special) return special;
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z0-9])/g, "$1-$2")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function toPascalCase(value) {
  if (!value) return value;
  if (/^[A-Z][A-Za-z0-9]*$/.test(value)) return value;
  return value
    .replace(/[^A-Za-z0-9]+/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(/\s+/u)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join("");
}

function toUpperSnakeCase(slug) {
  return slug.replace(/-/g, "_").toUpperCase();
}

function rewriteRefs(value) {
  if (Array.isArray(value)) return value.map((entry) => rewriteRefs(entry));
  if (!value || typeof value !== "object") return value;

  const clone = {};
  for (const [key, entry] of Object.entries(value)) {
    if (key === "$ref" && typeof entry === "string" && !entry.startsWith("#")) {
      const normalized = entry.replaceAll("\\", "/");
      clone[key] = normalized.startsWith("../")
        ? `../generated-schemaorg-full/${normalized.slice(3)}`
        : `../generated-schemaorg-full/types/${normalized}`;
      continue;
    }
    clone[key] = rewriteRefs(entry);
  }
  return clone;
}

function artifactEntries(kindFolder) {
  const folder = path.join(generatedRoot, kindFolder);
  return sortNames(
    fs.readdirSync(folder)
      .filter((name) => name.endsWith(".schema.json"))
      .map((name) => name.replace(/\.schema\.json$/u, "")),
  );
}

function governedTypeNames() {
  const coreSource = fs.readFileSync(path.join(packageRoot, "..", "structured-data", "src", "core.ts"), "utf8");
  const match = coreSource.match(/SUPPORTED_SCHEMA_ORG_TYPES = Object\.freeze\(\[(.*?)\] as const/s);
  if (!match) throw new Error("Could not parse SUPPORTED_SCHEMA_ORG_TYPES from structured-data core.ts");
  return sortNames([...match[1].matchAll(/"([^"]+)"/g)].map((entry) => entry[1]));
}

const typeNames = sortNames([...new Set([...governedTypeNames(), ...artifactEntries("types")])]);
const propertyNames = artifactEntries("properties");
const enumerationNames = artifactEntries("enumerations");
const datatypeNames = artifactEntries("datatypes");

const generatedTypeCache = new Map();

function getGeneratedTypeSchema(type) {
  if (!generatedTypeCache.has(type)) {
    const typeSchemaPath = path.join(generatedTypesRoot, `${type}.schema.json`);
    const datatypeSchemaPath = path.join(generatedFullRoot, "datatypes", `${type}.schema.json`);
    const sourceSchemaPath = fs.existsSync(typeSchemaPath) ? typeSchemaPath : datatypeSchemaPath;
    if (!fs.existsSync(sourceSchemaPath)) {
      throw new Error(`Missing generated Schema.org type schema for ${type}`);
    }
    generatedTypeCache.set(type, readJson(sourceSchemaPath));
  }
  return generatedTypeCache.get(type);
}

function mergePropertyLayers(type, seen = new Set()) {
  if (seen.has(type)) return { properties: {}, required: [] };
  seen.add(type);

  const schema = getGeneratedTypeSchema(type);
  const properties = {};
  const required = new Set();
  const branches = Array.isArray(schema.allOf) ? schema.allOf : [schema];

  for (const branch of branches) {
    if (branch && typeof branch === "object" && typeof branch.$ref === "string") {
      const parentType = path.basename(branch.$ref, ".schema.json");
      const parent = mergePropertyLayers(parentType, seen);
      Object.assign(properties, parent.properties);
      parent.required.forEach((key) => required.add(key));
      continue;
    }

    if (!branch || typeof branch !== "object") continue;
    Object.assign(properties, rewriteRefs(branch.properties ?? {}));
    for (const key of branch.required ?? []) {
      if (key !== "@type") required.add(key);
    }
  }

  return { properties, required: [...required] };
}

const assetMap = {};
const seenAssets = new Set();

function collectAsset(relativePath) {
  const normalized = relativePath.replaceAll("\\", "/");
  if (seenAssets.has(normalized)) return;
  seenAssets.add(normalized);

  const sourcePath = path.join(generatedFullRoot, normalized.replaceAll("/", path.sep));
  const schema = readJson(sourcePath);
  assetMap[`generated-schemaorg-full/${normalized}`] = schema;

  const visit = (node) => {
    if (Array.isArray(node)) {
      node.forEach((entry) => visit(entry));
      return;
    }
    if (!node || typeof node !== "object") return;
    if (typeof node.$ref === "string" && !node.$ref.startsWith("#")) {
      const target = path.posix.normalize(path.posix.join(path.posix.dirname(normalized), node.$ref));
      collectAsset(target);
    }
    Object.values(node).forEach((entry) => visit(entry));
  };

  visit(schema);
}

function collectPageFamilyAsset(relativePath) {
  const normalized = `page-family::${relativePath.replaceAll("\\", "/")}`;
  if (seenAssets.has(normalized)) return;
  seenAssets.add(normalized);

  const relativeAssetPath = relativePath.replaceAll("\\", "/");
  const sourcePath = path.join(generatedRoot, relativeAssetPath.replaceAll("/", path.sep));
  const schema = readJson(sourcePath);
  assetMap[`generated-schemaorg-page-family/${relativeAssetPath}`] = schema;

  const visit = (node) => {
    if (Array.isArray(node)) {
      node.forEach((entry) => visit(entry));
      return;
    }
    if (!node || typeof node !== "object") return;
    if (typeof node.$ref === "string" && !node.$ref.startsWith("#")) {
      const target = path.posix.normalize(path.posix.join(path.posix.dirname(relativeAssetPath), node.$ref));
      collectPageFamilyAsset(target);
    }
    Object.values(node).forEach((entry) => visit(entry));
  };

  visit(schema);
}

fs.mkdirSync(structuredDataRoot, { recursive: true });

const typeRegistry = typeNames.map((type) => {
  const sourceSchema = getGeneratedTypeSchema(type);
  const { properties, required } = mergePropertyLayers(type);
  const topLevelSchema = {
    $id: sourceSchema.$id,
    $schema: sourceSchema.$schema,
    title: sourceSchema.title,
    description: sourceSchema.description,
    type: "object",
    properties,
    required: ["@type", ...required],
    unevaluatedProperties: false,
    "x-schemaorg-cardinality": "open-world",
  };
  const fileName = `${toSlug(type)}.schema.json`;
  const outputPath = path.join(structuredDataRoot, fileName);
  fs.writeFileSync(outputPath, `${JSON.stringify(topLevelSchema, null, 2)}\n`, "utf8");

  assetMap[`structured-data/${fileName}`] = topLevelSchema;
  collectAsset(`types/${type}.schema.json`);

  return {
    type,
    schemaId: topLevelSchema.$id,
    assetPath: `./schemas/structured-data/${fileName}`,
    schema: topLevelSchema,
  };
});

for (const propertyName of propertyNames) collectPageFamilyAsset(`properties/${propertyName}.schema.json`);
for (const enumerationName of enumerationNames) collectPageFamilyAsset(`enumerations/${enumerationName}.schema.json`);
for (const datatypeName of datatypeNames) collectPageFamilyAsset(`datatypes/${datatypeName}.schema.json`);

const nonTypeRegistry = [
  ...propertyNames.map((name) => ({
    type: name,
    schemaId: `urn:groupsum:schemaorg:property:${name}`,
    assetPath: `./schemas/generated-schemaorg-page-family/properties/${name}.schema.json`,
    schema: assetMap[`generated-schemaorg-page-family/properties/${name}.schema.json`],
  })),
  ...enumerationNames.map((name) => ({
    type: name,
    schemaId: `urn:groupsum:schemaorg:enumeration:${name}`,
    assetPath: `./schemas/generated-schemaorg-page-family/enumerations/${name}.schema.json`,
    schema: assetMap[`generated-schemaorg-page-family/enumerations/${name}.schema.json`],
  })),
  ...datatypeNames.map((name) => ({
    type: name,
    schemaId: `urn:groupsum:schemaorg:datatype:${name}`,
    assetPath: `./schemas/generated-schemaorg-page-family/datatypes/${name}.schema.json`,
    schema: assetMap[`generated-schemaorg-page-family/datatypes/${name}.schema.json`],
  })),
];

const registry = [...typeRegistry, ...nonTypeRegistry];

const artifacts = [
  ...typeNames.map((name) => ({ kind: "type", name })),
  ...propertyNames.map((name) => ({ kind: "property", name })),
  ...enumerationNames.map((name) => ({ kind: "enumeration", name })),
  ...datatypeNames.map((name) => ({ kind: "datatype", name })),
].map((entry) => {
  const baseSlug = toSlug(entry.name);
  const slug = entry.kind === "type"
    ? baseSlug
    : entry.kind === "property"
      ? `schema-property-${baseSlug}`
      : entry.kind === "enumeration"
        ? `schema-enumeration-${baseSlug}`
        : `schema-datatype-${baseSlug}`;
  const pascalName = toPascalCase(entry.name);
  const wrapperExportName = entry.kind === "property" ? `${pascalName}PropertyStructuredData` : `${pascalName}StructuredData`;
  const wrapperAliasExportName = wrapperExportName;
  const visibleExportName = entry.kind === "property" ? `SchemaProperty${pascalName}` : pascalName;
  const visibleAliasExportName = visibleExportName;
  const tokenKindSegment =
    entry.kind === "type" ? "" : entry.kind === "property" ? "SchemaProperty" : entry.kind === "enumeration" ? "SchemaEnumeration" : "SchemaDatatype";
  const tokenConstKindSegment =
    entry.kind === "type" ? "" : entry.kind === "property" ? "SCHEMA_PROPERTY_" : entry.kind === "enumeration" ? "SCHEMA_ENUMERATION_" : "SCHEMA_DATATYPE_";
  return {
    ...entry,
    slug,
    pascalName,
    wrapperExportName,
    wrapperAliasExportName,
    visibleExportName,
    visibleAliasExportName,
    cssFileName: `semantic-${slug}.css`,
    cssExportPath: `./styles/semantic-${slug}.css`,
    cssSourcePath: `./src/styles/semantic-${slug}.css`,
    shellSelector: `.lander-semantic--${slug}`,
    tokenPrefix: `mdp-semantic-${slug}-`,
    tokenConstExportName: `MDWRK_PAGES_UI_SEMANTIC_${tokenConstKindSegment}${toUpperSnakeCase(baseSlug)}_TOKEN_NAMES`,
    tokenTypeExportName: `MdwrkPagesUiSemantic${tokenKindSegment}${pascalName}TokenName`,
  };
});

const metadataModuleSource = `export type SchemaOrgPageFamilyArtifactKind = "type" | "property" | "enumeration" | "datatype";

export interface SchemaOrgPageFamilyArtifactMeta {
  kind: SchemaOrgPageFamilyArtifactKind;
  name: string;
  slug: string;
  pascalName: string;
  wrapperExportName: string;
  wrapperAliasExportName: string;
  visibleExportName: string;
  visibleAliasExportName: string;
  cssFileName: string;
  cssExportPath: string;
  cssSourcePath: string;
  shellSelector: string;
  tokenPrefix: string;
  tokenConstExportName: string;
  tokenTypeExportName: string;
}

export const GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS: readonly SchemaOrgPageFamilyArtifactMeta[] = ${JSON.stringify(artifacts, null, 2)};

export const GENERATED_SCHEMAORG_PAGE_FAMILY_KIND_NAMES = ${JSON.stringify(artifacts.map((artifact) => artifact.name), null, 2)} as const;
export type GeneratedSchemaOrgPageFamilyKind = typeof GENERATED_SCHEMAORG_PAGE_FAMILY_KIND_NAMES[number];

export const GENERATED_SCHEMAORG_PAGE_FAMILY_TYPES = GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS.filter((artifact) => artifact.kind === "type");
export const GENERATED_SCHEMAORG_PAGE_FAMILY_PROPERTIES = GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS.filter((artifact) => artifact.kind === "property");
export const GENERATED_SCHEMAORG_PAGE_FAMILY_ENUMERATIONS = GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS.filter((artifact) => artifact.kind === "enumeration");
export const GENERATED_SCHEMAORG_PAGE_FAMILY_DATATYPES = GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS.filter((artifact) => artifact.kind === "datatype");

export const GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS = {
  total: ${artifacts.length},
  types: ${typeNames.length},
  properties: ${propertyNames.length},
  enumerations: ${enumerationNames.length},
  datatypes: ${datatypeNames.length},
} as const;
`;

const moduleSource = `export const GENERATED_STRUCTURED_DATA_SCHEMA_REGISTRY: readonly unknown[] = ${JSON.stringify(registry, null, 2)};

export const GENERATED_STRUCTURED_DATA_SCHEMA_ASSETS: Readonly<Record<string, unknown>> = ${JSON.stringify(assetMap, null, 2)};
`;

fs.writeFileSync(generatedMetadataModulePath, metadataModuleSource, "utf8");
fs.writeFileSync(generatedModulePath, moduleSource, "utf8");
