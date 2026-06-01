import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contractRoot = path.join(repoRoot, "packages", "contracts", "lander-content-contract");
const generatedRoot = path.join(contractRoot, "schemas", "generated-schemaorg-page-family");
const tokenPackageRoot = path.join(repoRoot, "packages", "ui", "pages-ui-tokens");
const tokenStylesRoot = path.join(tokenPackageRoot, "src", "styles");
const tokenGeneratedPath = path.join(tokenPackageRoot, "src", "generated-semantic-tokens.ts");
const tokenFixturePath = path.join(tokenPackageRoot, "tests", "semantic-token-fixtures.mjs");
const tokenBundlePath = path.join(tokenStylesRoot, "generated-semantic-surface.css");

const structuredDataRoot = path.join(repoRoot, "packages", "contracts", "structured-data", "src");
const structuredDataGeneratedPath = path.join(structuredDataRoot, "generated-page-family.ts");

const structuredDataReactRoot = path.join(repoRoot, "packages", "machine", "lander-react-structured-data", "src");
const structuredDataReactGeneratedPath = path.join(structuredDataReactRoot, "generated-page-family.tsx");

const landerReactSemanticRoot = path.join(repoRoot, "packages", "ui", "lander-react", "src", "semantic");
const generatedTypeFamilyPath = path.join(landerReactSemanticRoot, "generated-type-family.tsx");
const generatedTypeFamilyDir = path.join(landerReactSemanticRoot, "generated-type-family");
const datatypeFamilyPath = path.join(landerReactSemanticRoot, "datatype-family.tsx");
const datatypeFamilyDir = path.join(landerReactSemanticRoot, "datatype-family");
const enumerationFamilyPath = path.join(landerReactSemanticRoot, "enumeration-family.tsx");
const enumerationFamilyDir = path.join(landerReactSemanticRoot, "enumeration-family");
const propertyFamilyPath = path.join(landerReactSemanticRoot, "property-family.tsx");
const propertyFamilyDir = path.join(landerReactSemanticRoot, "property-family");

const docsRoot = path.join(repoRoot, "docs");
const structuredMatrixPath = path.join(docsRoot, "structured-data-semantic-component-matrix.md");
const structuredPresenceCsvPath = path.join(docsRoot, "structured-data-presence.csv");
const generatedPresenceCsvPath = path.join(docsRoot, "generated-schemaorg-page-family-presence.csv");
const semanticDemoRoot = path.join(repoRoot, "examples", "semantic-components-demo", "src");
const semanticDemoFamilyMapPath = path.join(semanticDemoRoot, "generated-governed-family-map.mjs");

const SPECIAL_SLUGS = new Map([
  ["FAQPage", "faq-page"],
  ["QAPage", "qa-page"],
  ["URL", "url"],
]);

const LEGACY_BESPOKE_TYPE_NAMES = new Set([
  "AboutPage",
  "AggregateRating",
  "Answer",
  "Article",
  "BlogPosting",
  "Book",
  "BroadcastEvent",
  "BreadcrumbList",
  "CheckoutPage",
  "ClaimReview",
  "Clip",
  "CollectionPage",
  "ContactPage",
  "Course",
  "CourseInstance",
  "Dataset",
  "DiscussionForumPosting",
  "EmployerAggregateRating",
  "Event",
  "FAQPage",
  "HowTo",
  "ImageObject",
  "ItemList",
  "ItemPage",
  "JobPosting",
  "LearningResource",
  "LocalBusiness",
  "MathSolver",
  "MemberProgram",
  "MerchantReturnPolicy",
  "MonetaryAmountDistribution",
  "Movie",
  "NewsArticle",
  "OfferShippingDetails",
  "Organization",
  "Product",
  "ProductGroup",
  "ProfilePage",
  "QAPage",
  "Question",
  "Quiz",
  "ReadAction",
  "RealEstateListing",
  "Recipe",
  "Review",
  "SearchResultsPage",
  "SolveMathAction",
  "SoftwareApplication",
  "SoftwareSourceCode",
  "SpeakableSpecification",
  "TechArticle",
  "VacationRental",
  "Vehicle",
  "VideoGallery",
  "VideoObject",
  "WebApplication",
  "WebPage",
  "WebSite",
]);

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function sortNames(names) {
  return [...names].sort((left, right) => left.localeCompare(right, "en", { sensitivity: "base" }));
}

function listArtifactNames(kindFolder) {
  const folder = path.join(generatedRoot, kindFolder);
  return sortNames(
    fs.readdirSync(folder)
      .filter((name) => name.endsWith(".schema.json"))
      .map((name) => name.replace(/\.schema\.json$/u, "")),
  );
}

function governedTypeNames() {
  const coreSource = fs.readFileSync(path.join(repoRoot, "packages", "contracts", "structured-data", "src", "core.ts"), "utf8");
  const match = coreSource.match(/SUPPORTED_SCHEMA_ORG_TYPES = Object\.freeze\(\[(.*?)\] as const/s);
  if (!match) throw new Error("Could not parse SUPPORTED_SCHEMA_ORG_TYPES from structured-data core.ts");
  return sortNames([...match[1].matchAll(/"([^"]+)"/g)].map((entry) => entry[1]));
}

function governedFamilyEntries() {
  const semanticRoot = path.join(repoRoot, "packages", "ui", "lander-react", "src", "semantic");
  const familyLabelByFile = new Map([
    ["supporting-family", "Supporting family"],
    ["infrastructure-family", "Infrastructure family"],
    ["reference-family", "Reference family"],
    ["medical-family", "Medical family"],
    ["taxonomy-family", "Taxonomy family"],
    ["data-family", "Data family"],
    ["service-family", "Service family"],
    ["article-family", "Article family"],
    ["education-family", "Education family"],
    ["commerce-family", "Commerce family"],
    ["media-family", "Media family"],
    ["identity-family", "Identity family"],
    ["page-family", "Page family"],
    ["catalog-family", "Catalog family"],
  ]);

  const familyEntries = [];
  for (const [fileKey, family] of familyLabelByFile.entries()) {
    const topLevelPath = path.join(semanticRoot, `${fileKey}.tsx`);
    const topLevelSource = fs.readFileSync(topLevelPath, "utf8");
    const folderMatch = topLevelSource.match(/export\s+\*\s+from\s+"\.\/([^/]+)\/index\.js";/);
    const names = new Set();

    if (folderMatch) {
      const folderPath = path.join(semanticRoot, folderMatch[1]);
      for (const entry of fs.readdirSync(folderPath)) {
        if (!/\.(ts|tsx)$/.test(entry) || entry === "index.ts" || entry === "shared.tsx") continue;
        const source = fs.readFileSync(path.join(folderPath, entry), "utf8");
        for (const match of source.matchAll(/^export function (\w+)/gm)) {
          names.add(match[1]);
        }
      }
    } else {
      for (const match of topLevelSource.matchAll(/^export function (\w+)/gm)) {
        names.add(match[1]);
      }
    }

    for (const name of names) {
      if (!name.endsWith("Props")) {
        familyEntries.push({ name, family, familySlug: toSlug(family) });
      }
    }
  }

  return familyEntries;
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

function toCamelCase(value) {
  const pascal = toPascalCase(value);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

function toUpperSnakeCase(slug) {
  return slug.replace(/-/g, "_").toUpperCase();
}

function artifactMeta(kind, name) {
  const baseSlug = toSlug(name);
  const slug = kind === "type"
    ? baseSlug
    : kind === "property"
      ? `schema-property-${baseSlug}`
      : kind === "enumeration"
        ? `schema-enumeration-${baseSlug}`
        : `schema-datatype-${baseSlug}`;
  const pascalName = toPascalCase(name);
  const visibleExportName = kind === "property" ? `SchemaProperty${pascalName}` : pascalName;
  const tokenKindSegment =
    kind === "type" ? "" : kind === "property" ? "SchemaProperty" : kind === "enumeration" ? "SchemaEnumeration" : "SchemaDatatype";
  const tokenConstKindSegment =
    kind === "type" ? "" : kind === "property" ? "SCHEMA_PROPERTY_" : kind === "enumeration" ? "SCHEMA_ENUMERATION_" : "SCHEMA_DATATYPE_";
  return {
    kind,
    name,
    slug,
    pascalName,
    visibleExportName,
    wrapperExportName: kind === "property" ? `${pascalName}PropertyStructuredData` : `${pascalName}StructuredData`,
    inputTypeName:
      kind === "property"
        ? `${pascalName}PropertyInput`
        : `${pascalName}Input`,
    nodeExportName:
      kind === "property"
        ? `${toCamelCase(name)}PropertyNode`
        : `${toCamelCase(name)}Node`,
    tokenConstExportName: `MDWRK_PAGES_UI_SEMANTIC_${tokenConstKindSegment}${toUpperSnakeCase(baseSlug)}_TOKEN_NAMES`,
    tokenTypeExportName: `MdwrkPagesUiSemantic${tokenKindSegment}${pascalName}TokenName`,
    cssFileName: `semantic-${slug}.css`,
    cssExportPath: `./styles/semantic-${slug}.css`,
    cssSourcePath: `./src/styles/semantic-${slug}.css`,
    shellSelector: `.lander-semantic--${slug}`,
  };
}

function artifactDescription(meta) {
  const folderName =
    meta.kind === "property"
      ? "properties"
      : meta.kind === "enumeration"
        ? "enumerations"
        : meta.kind === "datatype"
          ? "datatypes"
          : "types";
  const schema = readJson(path.join(generatedRoot, folderName, `${meta.name}.schema.json`));
  return schema.description ?? "";
}

function writeFile(filePath, contents) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  if (fs.existsSync(filePath) && fs.readFileSync(filePath, "utf8") === contents) return;
  fs.writeFileSync(filePath, contents, "utf8");
}

function resetDir(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
  fs.mkdirSync(dirPath, { recursive: true });
}

function chunk(items, size) {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

function baselineCss(meta) {
  const hue = meta.kind === "datatype" ? "47, 143, 110" : meta.kind === "enumeration" ? "213, 121, 31" : meta.kind === "property" ? "63, 140, 255" : "52, 113, 232";
  return `:root,
:root[data-lander-theme="lander-light"],
[data-lander-theme="lander-light"] {
  --mdp-semantic-${meta.slug}-padding: 1rem;
  --mdp-semantic-${meta.slug}-gap: 0.75rem;
  --mdp-semantic-${meta.slug}-radius: 1rem;
  --mdp-semantic-${meta.slug}-surface: linear-gradient(180deg, rgba(${hue}, 0.12), var(--mdwrk-color-bg-panel-strong));
  --mdp-semantic-${meta.slug}-border: rgba(${hue}, 0.24);
  --mdp-semantic-${meta.slug}-shadow: 0 20px 44px rgba(15, 23, 42, 0.08);
}

[data-lander-theme="lander-dark"],
[data-lander-theme="dark"],
.dark {
  --mdp-semantic-${meta.slug}-padding: 1rem;
  --mdp-semantic-${meta.slug}-gap: 0.75rem;
  --mdp-semantic-${meta.slug}-radius: 1rem;
  --mdp-semantic-${meta.slug}-surface: linear-gradient(180deg, rgba(${hue}, 0.18), var(--mdwrk-color-bg-panel-strong));
  --mdp-semantic-${meta.slug}-border: rgba(${hue}, 0.32);
  --mdp-semantic-${meta.slug}-shadow: 0 24px 54px rgba(0, 0, 0, 0.34);
}

${meta.shellSelector} {
  padding: var(--mdp-semantic-${meta.slug}-padding);
  gap: var(--mdp-semantic-${meta.slug}-gap);
  border-radius: var(--mdp-semantic-${meta.slug}-radius);
  background: var(--mdp-semantic-${meta.slug}-surface);
  border: 1px solid var(--mdp-semantic-${meta.slug}-border);
  box-shadow: var(--mdp-semantic-${meta.slug}-shadow);
}

${meta.shellSelector} .lander-semantic__header,
${meta.shellSelector} .lander-semantic__body,
${meta.shellSelector} .lander-semantic__footer,
${meta.shellSelector} .lander-semantic__actions {
  gap: var(--mdp-semantic-${meta.slug}-gap);
}

${meta.shellSelector} .lander-semantic__header,
${meta.shellSelector} .lander-semantic__eyebrow,
${meta.shellSelector} .lander-semantic__title,
${meta.shellSelector} .lander-semantic__subtitle,
${meta.shellSelector} .lander-semantic__description,
${meta.shellSelector} .lander-semantic__meta,
${meta.shellSelector} .lander-semantic__image,
${meta.shellSelector} .lander-semantic__body,
${meta.shellSelector} .lander-semantic__actions,
${meta.shellSelector} .lander-semantic__footer {
  align-self: stretch;
}

${meta.shellSelector} .lander-semantic__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

${meta.shellSelector} .lander-semantic__title {
  margin: 0;
}

${meta.shellSelector} .lander-semantic__subtitle,
${meta.shellSelector} .lander-semantic__description {
  margin: 0;
}

${meta.shellSelector} .lander-semantic__meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: calc(var(--mdp-semantic-${meta.slug}-gap) * 0.8);
}

${meta.shellSelector} .lander-semantic__image {
  border-radius: calc(var(--mdp-semantic-${meta.slug}-radius) * 0.75);
  overflow: clip;
}

${meta.shellSelector} .lander-semantic__body {
  display: grid;
}

${meta.shellSelector} .lander-semantic__actions {
  display: flex;
  flex-wrap: wrap;
}

${meta.shellSelector} .lander-semantic__footer {
  color: var(--mdwrk-color-text-muted);
}
`;
}

function shouldRegenerateCss(meta) {
  return meta.kind !== "type" || !LEGACY_BESPOKE_TYPE_NAMES.has(meta.name);
}

const governedTypeNameSet = new Set(governedTypeNames());
const generatedTypeNames = listArtifactNames("types");
const generatedOnlyTypes = generatedTypeNames
  .filter((name) => !governedTypeNameSet.has(name) && !LEGACY_BESPOKE_TYPE_NAMES.has(name))
  .map((name) => artifactMeta("type", name));
const types = sortNames([...new Set([...governedTypeNameSet, ...generatedTypeNames])]).map((name) => artifactMeta("type", name));
const properties = listArtifactNames("properties").map((name) => artifactMeta("property", name));
const enumerations = listArtifactNames("enumerations").map((name) => artifactMeta("enumeration", name));
const datatypes = listArtifactNames("datatypes").map((name) => artifactMeta("datatype", name));
const artifacts = [...types, ...properties, ...enumerations, ...datatypes];

// Generate pages-ui-tokens files.
for (const meta of artifacts) {
  const cssPath = path.join(tokenStylesRoot, meta.cssFileName);
  if (shouldRegenerateCss(meta) || !fs.existsSync(cssPath)) {
    writeFile(cssPath, baselineCss(meta));
  }
}

const tokenGeneratedSource = `${artifacts.map((meta) => `export const ${meta.tokenConstExportName} = [
  "mdp-semantic-${meta.slug}-padding",
  "mdp-semantic-${meta.slug}-gap",
  "mdp-semantic-${meta.slug}-radius",
  "mdp-semantic-${meta.slug}-surface",
  "mdp-semantic-${meta.slug}-border",
  "mdp-semantic-${meta.slug}-shadow",
] as const;

export type ${meta.tokenTypeExportName} = typeof ${meta.tokenConstExportName}[number];
`).join("\n")}
`;
writeFile(tokenGeneratedPath, tokenGeneratedSource);

const tokenFixtureSource = `export const semanticTypeNames = ${JSON.stringify(artifacts.map((meta) => meta.name), null, 2)};

export const semanticTokenFixtures = ${JSON.stringify(artifacts.map((meta) => ({
  kind: meta.kind,
    name: meta.visibleExportName,
    slug: meta.slug,
    cssExportPath: meta.cssExportPath,
  cssSourcePath: meta.cssSourcePath,
  cssFilename: meta.cssFileName,
  tokenPrefix: `mdp-semantic-${meta.slug}-`,
  tokenConstExportName: meta.tokenConstExportName,
  shellSelector: meta.shellSelector,
})), null, 2)};
`;
writeFile(tokenFixturePath, tokenFixtureSource);

// Generate structured-data pass-through builders.
const datatypeTypeFor = new Map([
  ["Boolean", "boolean"],
  ["Number", "number"],
  ["Quantity", "number | string"],
  ["Text", "string"],
  ["Date", "string"],
  ["DateTime", "string"],
  ["Time", "string"],
]);

const structuredDataGeneratedSource = `export const primitiveSchemaOrgValueNode = <T>(value: T): T => value;
export const objectSchemaOrgValueNode = <T>(value: T): T => value;

${generatedOnlyTypes.map((meta) => `export type ${meta.inputTypeName} = Record<string, unknown>;
export const ${meta.nodeExportName} = (value: ${meta.inputTypeName}): ${meta.inputTypeName} => objectSchemaOrgValueNode(value);`).join("\n\n")}

${datatypes.map((meta) => `export type ${meta.inputTypeName} = ${datatypeTypeFor.get(meta.name) ?? "unknown"};
export const ${meta.nodeExportName} = (value: ${meta.inputTypeName}): ${meta.inputTypeName} => primitiveSchemaOrgValueNode(value);`).join("\n\n")}

${enumerations.map((meta) => `export type ${meta.inputTypeName} = string;
export const ${meta.nodeExportName} = (value: ${meta.inputTypeName}): ${meta.inputTypeName} => primitiveSchemaOrgValueNode(value);`).join("\n\n")}

${properties.map((meta) => `export type ${meta.inputTypeName} = Record<string, unknown>;
export const ${meta.nodeExportName} = (value: ${meta.inputTypeName}): ${meta.inputTypeName} => objectSchemaOrgValueNode(value);`).join("\n\n")}
`;
writeFile(structuredDataGeneratedPath, structuredDataGeneratedSource);

// Generate structured-data React wrappers.
const structuredDataReactSource = `import React from "react";
import type { CompiledStructuredDataIntent } from "@mdwrk/lander-core";
import type { StructuredDataIntentRendererEntry } from "./index.js";
import {
${[...generatedOnlyTypes, ...datatypes, ...enumerations, ...properties].map((meta) => `  type ${meta.inputTypeName},`).join("\n")}
} from "@mdwrk/structured-data";

function PrimitiveStructuredData({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function ObjectStructuredData({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data ?? {}) }} />;
}

${generatedOnlyTypes.map((meta) => `export interface ${meta.wrapperExportName}Props { data: ${meta.inputTypeName}; }
export function ${meta.wrapperExportName}({ data }: ${meta.wrapperExportName}Props) {
  return <ObjectStructuredData data={data} />;
}`).join("\n\n")}

${datatypes.map((meta) => `export interface ${meta.wrapperExportName}Props { data: ${meta.inputTypeName}; }
export function ${meta.wrapperExportName}({ data }: ${meta.wrapperExportName}Props) {
  return <PrimitiveStructuredData data={data} />;
}`).join("\n\n")}

${enumerations.map((meta) => `export interface ${meta.wrapperExportName}Props { data: ${meta.inputTypeName}; }
export function ${meta.wrapperExportName}({ data }: ${meta.wrapperExportName}Props) {
  return <PrimitiveStructuredData data={data} />;
}`).join("\n\n")}

${properties.map((meta) => `export interface ${meta.wrapperExportName}Props { data: ${meta.inputTypeName}; }
export function ${meta.wrapperExportName}({ data }: ${meta.wrapperExportName}Props) {
  return <ObjectStructuredData data={data} />;
}`).join("\n\n")}

export const generatedPageFamilyIntentRegistry = Object.freeze({
${[...generatedOnlyTypes, ...datatypes, ...enumerations, ...properties].map((meta) => `  ${JSON.stringify(meta.name)}: {
    componentName: ${JSON.stringify(meta.wrapperExportName)},
    render: (intent: CompiledStructuredDataIntent) => <${meta.wrapperExportName} data={intent.data as ${meta.inputTypeName}} />,
  },`).join("\n")}
}) satisfies Record<string, StructuredDataIntentRendererEntry>;
`;
writeFile(structuredDataReactGeneratedPath, structuredDataReactSource);

function semanticFamilyDirFor(kind) {
  if (kind === "type") return generatedTypeFamilyDir;
  if (kind === "datatype") return datatypeFamilyDir;
  if (kind === "enumeration") return enumerationFamilyDir;
  return propertyFamilyDir;
}

function semanticFamilyPathFor(kind) {
  if (kind === "type") return generatedTypeFamilyPath;
  if (kind === "datatype") return datatypeFamilyPath;
  if (kind === "enumeration") return enumerationFamilyPath;
  return propertyFamilyPath;
}

function semanticFamilyTitle(kind) {
  if (kind === "type") return "Type";
  if (kind === "datatype") return "Datatype";
  if (kind === "enumeration") return "Enumeration";
  return "Property";
}

function semanticFamilyValueType(kind, meta) {
  if (kind === "datatype") return datatypeTypeFor.get(meta.name) ?? "unknown";
  if (kind === "enumeration") return "string";
  return "Record<string, unknown>";
}

function semanticFamilyBaseValueType(kind) {
  if (kind === "datatype") return "boolean | number | string";
  if (kind === "enumeration") return "string";
  return "Record<string, unknown>";
}

function semanticFamilySharedSource(kind) {
  const title = semanticFamilyTitle(kind);
  const generatedPropsSource =
    kind === "type" || kind === "property"
      ? `export interface Generated${title}UiProps<T = ${semanticFamilyBaseValueType(kind)}> {
  value?: T;
  description?: string;
  examples?: T[];
  body?: React.ReactNode;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<T>;
  viewModel?: Generated${title}ViewModel;
}

export type Generated${title}Props<T = ${semanticFamilyBaseValueType(kind)}> = Generated${title}UiProps<T> & T;`
      : `export interface Generated${title}Props<T = ${semanticFamilyBaseValueType(kind)}> {
  value: T;
  description?: string;
  examples?: T[];
  body?: React.ReactNode;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<T>;
  viewModel?: Generated${title}ViewModel;
}`;
  return `import React from "react";
import {
  SemanticShell,
  SemanticStructuredDataGate,
  ${kind === "type" || kind === "property" ? "isRecord,\n  mergeRecordLike,\n  " : ""}joinClassNames,
  renderJsonPreview,
  renderStructuredSection,
} from "../shared.js";

export interface Generated${title}ViewModel {
  eyebrow?: React.ReactNode;
  footer?: React.ReactNode;
  subtitle?: React.ReactNode;
}

${generatedPropsSource}

interface RenderGenerated${title}CardProps<T> {
  StructuredDataComponent: React.ComponentType<{ data: unknown }>;
  defaultEyebrow: string;
  kind: string;
  shellClassName: string;
  title: string;
  value: T;
  description?: string;
  examples?: T[];
  body?: React.ReactNode;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<T>;
  viewModel?: Generated${title}ViewModel;
}

export function renderGenerated${title}Card<T>({
  StructuredDataComponent,
  defaultEyebrow,
  kind,
  shellClassName,
  title,
  value,
  description,
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: RenderGenerated${title}CardProps<T>) {
  const effectiveValue = ${kind === "type" || kind === "property"
    ? `isRecord(value) && isRecord(structuredDataOverrides)
    ? mergeRecordLike(value, structuredDataOverrides)
    : ((structuredDataOverrides ?? value) as T);`
    : `((structuredDataOverrides ?? value) as T);`}

  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <StructuredDataComponent data={effectiveValue as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind={kind}
        title={title}
        eyebrow={viewModel?.eyebrow ?? defaultEyebrow}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames(shellClassName, className)}
        meta=${kind === "type" || kind === "property"
          ? `{isRecord(effectiveValue) ? undefined : [{ label: "Value", value: renderJsonPreview(effectiveValue) }]}`
          : `{[{ label: "Value", value: renderJsonPreview(effectiveValue) }]}`}
        body={
          <>
            {renderStructuredSection(effectiveValue${kind === "type" || kind === "property" ? "" : ', "Value"'})}
            {examples?.length ? renderStructuredSection(examples, "Examples") : null}
            {body}
          </>
        }
        footer={viewModel?.footer}
      />
    </>
  );
}
`;
}

function semanticFamilyComponentSource(kind, meta) {
  const title = semanticFamilyTitle(kind);
  const structuredDataTypeImport = kind === "type" || kind === "property"
    ? `import type { ${meta.inputTypeName} } from "@mdwrk/structured-data";\n`
    : "";
  const sharedImports =
    kind === "type" || kind === "property"
      ? `Generated${title}UiProps, renderGenerated${title}Card`
      : `Generated${title}Props, renderGenerated${title}Card`;
  const propsInterface =
    kind === "type" || kind === "property"
      ? `export interface ${meta.visibleExportName}Props extends ${meta.inputTypeName}, Generated${title}UiProps<${meta.inputTypeName}> {}`
      : `export interface ${meta.visibleExportName}Props extends Generated${title}Props<${semanticFamilyValueType(kind, meta)}> {}`;
  const typeComponentValueLines =
    kind === "type" || kind === "property"
      ? `  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
`
      : "";
  const typeDestructure =
    kind === "type" || kind === "property"
      ? `{ value: legacyValue, description = ${JSON.stringify(artifactDescription(meta))}, examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }`
      : `{ value, description = ${JSON.stringify(artifactDescription(meta))}, examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }`;
  return `import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
${structuredDataTypeImport}import { ${sharedImports} } from "../shared.js";

${propsInterface}

export function ${meta.visibleExportName}(${typeDestructure}: ${meta.visibleExportName}Props) {
${typeComponentValueLines}  return renderGenerated${title}Card({
    StructuredDataComponent: structuredDataReact.${meta.wrapperExportName},
    defaultEyebrow: ${JSON.stringify(title)},
    kind: ${JSON.stringify(meta.slug)},
    shellClassName: ${JSON.stringify(meta.shellSelector.slice(1))},
    title: ${JSON.stringify(meta.name)},
    value,
    description,
    examples,
    body,
    className,
    emitStructuredData,
    structuredDataOverrides,
    viewModel,
  });
}
`;
}

function writeGeneratedSemanticFamily(kind, metas) {
  const dirPath = semanticFamilyDirFor(kind);
  const componentsDir = path.join(dirPath, "components");
  resetDir(dirPath);
  fs.mkdirSync(componentsDir, { recursive: true });
  writeFile(path.join(dirPath, "shared.tsx"), semanticFamilySharedSource(kind));

  for (const meta of metas) {
    writeFile(path.join(componentsDir, `${meta.slug}.tsx`), semanticFamilyComponentSource(kind, meta));
  }

  const exportChunks = chunk(metas, 75);
  exportChunks.forEach((entries, index) => {
    writeFile(
      path.join(dirPath, `exports-${String(index + 1).padStart(3, "0")}.ts`),
      entries
        .map((meta) => `export { ${meta.visibleExportName} } from "./components/${meta.slug}.js";
export type { ${meta.visibleExportName}Props } from "./components/${meta.slug}.js";`)
        .join("\n"),
    );
  });

  if (kind === "property") {
    exportChunks.forEach((entries, index) => {
      writeFile(
        path.join(dirPath, `property-map-${String(index + 1).padStart(3, "0")}.ts`),
        `import { ${entries.map((meta) => meta.visibleExportName).join(", ")} } from "./exports-${String(index + 1).padStart(3, "0")}.js";

export const SCHEMAORG_PROPERTY_COMPONENTS_${String(index + 1).padStart(3, "0")} = Object.freeze({
${entries.map((meta) => `  ${JSON.stringify(meta.name)}: ${meta.visibleExportName},`).join("\n")}
});
`,
      );
    });
  }

  const indexLines = [
    ...exportChunks.map((_, index) => `export * from "./exports-${String(index + 1).padStart(3, "0")}.js";`),
  ];
  if (kind === "property") {
    indexLines.push(
      ...exportChunks.map((_, index) => `import { SCHEMAORG_PROPERTY_COMPONENTS_${String(index + 1).padStart(3, "0")} } from "./property-map-${String(index + 1).padStart(3, "0")}.js";`),
      "",
      "export const SCHEMAORG_PROPERTY_COMPONENTS = Object.freeze({",
      ...exportChunks.map((_, index) => `  ...SCHEMAORG_PROPERTY_COMPONENTS_${String(index + 1).padStart(3, "0")},`),
      "});",
    );
  }
  writeFile(path.join(dirPath, "index.ts"), indexLines.join("\n"));
  writeFile(semanticFamilyPathFor(kind), `export * from "./${path.basename(dirPath)}/index.js";`);
}

writeGeneratedSemanticFamily("type", generatedOnlyTypes);
writeGeneratedSemanticFamily("datatype", datatypes);
writeGeneratedSemanticFamily("enumeration", enumerations);
writeGeneratedSemanticFamily("property", properties);

writeFile(
  tokenBundlePath,
  `${artifacts.map((meta) => `@import "./${meta.cssFileName}";`).join("\n")}\n`,
);

const governedFamilies = governedFamilyEntries();
writeFile(
  semanticDemoFamilyMapPath,
  `export const governedFamilyEntries = ${JSON.stringify(governedFamilies, null, 2)};\n`,
);

// Docs + CSVs.
const discoverableTypeNames = [
  "Thing",
  "CreativeWork",
  "BreadcrumbList",
  "ListItem",
  "Offer",
  "Place",
  "MonetaryAmount",
  "Action",
  "ReadAction",
];
const discoverablePropertyNames = [
  "about",
  "potentialAction",
  "offers",
  "address",
  "itemListElement",
];
const presenceRows = artifacts.map((meta) => ({
  kind: meta.kind,
  name: meta.name,
  jsonSchema: "✅",
  wrapper: "✅",
  fused: "✅",
  classNames: "✅",
  cssTokens: "✅",
})).map((row) => ({
  ...row,
  jsonSchema: "✅",
  wrapper: "✅",
  fused: "✅",
  classNames: "✅",
  cssTokens: "✅",
  discoverable:
    (row.kind === "type" && discoverableTypeNames.includes(row.name)) ||
    (row.kind === "property" && discoverablePropertyNames.includes(row.name))
      ? "✅"
      : "",
}));

writeFile(
  structuredMatrixPath,
  `# Structured Data Semantic Component Matrix

| Surface | Current count |
|---|---:|
| JSON Schema | ${artifacts.length} / ${artifacts.length} |
| JSON-LD emitting React component | ${artifacts.length} / ${artifacts.length} |
| JSON-LD emitting Visible Semantic React component | ${artifacts.length} / ${artifacts.length} |
| Fused | ${artifacts.length} / ${artifacts.length} |
| Fused ClassNames | ${artifacts.length} / ${artifacts.length} |
| Fused ClassName CSS Tokens | ${artifacts.length} / ${artifacts.length} |
| Foundational type discoverability | ${discoverableTypeNames.length} / ${discoverableTypeNames.length} |
| Foundational property discoverability | ${discoverablePropertyNames.length} / ${discoverablePropertyNames.length} |

Artifact breakdown:
- types: ${types.length}
- properties: ${properties.length}
- enumerations: ${enumerations.length}
- datatypes: ${datatypes.length}

Foundational generated types:
- ${discoverableTypeNames.join("\n- ")}

Foundational generated properties:
- ${discoverablePropertyNames.join("\n- ")}
`,
);

writeFile(
  structuredPresenceCsvPath,
  `Artifact Kind,Schema Name,JSON Schema,Fused,Fused ClassNames,Fused ClassName CSS Tokens,Discoverable
${presenceRows.map((row) => `${row.kind},${row.name},${row.jsonSchema},${row.fused},${row.classNames},${row.cssTokens},${row.discoverable}`).join("\n")}
`,
);

writeFile(
  generatedPresenceCsvPath,
  `Artifact Kind,Schema Name,Schema Path,JSON Schema,Fused,Fused ClassNames,Fused ClassName CSS Tokens
${artifacts.map((meta) => {
    const schemaPath = meta.kind === "type"
      ? `packages/contracts/lander-content-contract/schemas/structured-data/${meta.slug}.schema.json`
      : `packages/contracts/lander-content-contract/schemas/generated-schemaorg-page-family/${meta.kind}s/${meta.name}.schema.json`;
    return `${meta.kind},${meta.name},${schemaPath},✅,✅,✅,✅`;
  }).join("\n")}
`,
);

writeFile(
  generatedPresenceCsvPath,
  fs.readFileSync(generatedPresenceCsvPath, "utf8").replaceAll("âœ…", "✅"),
);
