import { GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS, GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS } from "../../../packages/contracts/lander-content-contract/dist/generated-schemaorg-page-family-metadata.js";
import {
  getStructuredDataSchemaAssetMap,
  getStructuredDataSchemaByType,
  listStructuredDataSchemas,
  validateStructuredDataByType,
} from "../../../packages/contracts/lander-content-contract/dist/index.js";
import { semanticFixtures } from "../../../packages/ui/lander-react/tests/semantic-fixtures.mjs";
import { governedFamilyEntries } from "./generated-governed-family-map.mjs";

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const curatedDescriptionsByName = {
  AboutPage: "About-page variant with entity framing.",
  AggregateRating: "Aggregate rating summary block.",
  Answer: "Answer block with lightweight attribution.",
  Article: "Primary editorial story shell.",
  BlogPosting: "Blog variant with the article visual pattern.",
  Book: "Book catalog entity.",
  BroadcastEvent: "Live broadcast event surface.",
  BreadcrumbList: "Breadcrumb navigation surface.",
  CheckoutPage: "Checkout-focused page shell.",
  ClaimReview: "Fact-check style editorial surface.",
  Clip: "Time-bounded video clip summary.",
  CollectionPage: "Collection page with curated entries.",
  ContactPage: "Contact page with direct channels.",
  Course: "Course overview with modules.",
  CourseInstance: "Scheduled offering of a course.",
  Dataset: "Dataset entity shell.",
  DiscussionForumPosting: "Discussion post shell with article-body semantics.",
  EmployerAggregateRating: "Employer reputation summary.",
  Event: "General event shell.",
  FAQPage: "FAQ landing surface.",
  HowTo: "Step-by-step procedural guide.",
  ImageObject: "Image asset shell.",
  ItemList: "Curated item list surface.",
  ItemPage: "Single-entity page shell.",
  JobPosting: "Job listing shell.",
  LearningResource: "General learning asset shell.",
  LocalBusiness: "Local business entity surface.",
  MathSolver: "Math assistance surface.",
  MemberProgram: "Membership program summary.",
  MerchantReturnPolicy: "Return-policy terms surface.",
  MonetaryAmountDistribution: "Compensation or price-range distribution.",
  Movie: "Movie-style media entity.",
  NewsArticle: "News-focused article wrapper.",
  OfferShippingDetails: "Shipping details summary.",
  Organization: "Organization identity shell.",
  Product: "Primary product offer shell.",
  ProductGroup: "Grouped product variants.",
  ProfilePage: "Person or entity profile page.",
  QAPage: "Question-and-answer landing surface.",
  Question: "Single question block with accepted answer.",
  Quiz: "Assessment shell with question cards.",
  ReadAction: "Read action surface.",
  RealEstateListing: "Real-estate listing page shell.",
  Recipe: "Recipe-style checklist shell.",
  Review: "Review surface for an item.",
  SearchResultsPage: "Search results page with query context.",
  SolveMathAction: "Action wrapper for math solving.",
  SoftwareApplication: "Software application landing shell.",
  SoftwareSourceCode: "Source-code catalog entry.",
  SpeakableSpecification: "Speakable content selector surface.",
  TechArticle: "Technical article specialization.",
  VacationRental: "Rental listing shell.",
  Vehicle: "Vehicle inventory surface.",
  VideoGallery: "Gallery shell for multiple videos.",
  VideoObject: "Video preview shell.",
  WebApplication: "Browser-oriented app shell.",
  WebPage: "Generic web page shell.",
  WebSite: "Site-level identity surface.",
};

const highlightFamilyOrder = [
  "Article family",
  "Education family",
  "Commerce family",
  "Media family",
  "Identity family",
  "Catalog family",
  "Page family",
];

const highlightFamilyDescriptions = {
  "Article family": "Editorial, publishing, discussion, and fact-check surfaces.",
  "Education family": "Courses, Q&A, quizzes, learning assets, and how-to flows.",
  "Commerce family": "Product, review, shipping, pricing, and return-policy semantics.",
  "Media family": "Video, clips, broadcasts, images, and movie-style media shells.",
  "Identity family": "Profiles, organizations, local entities, breadcrumbs, and site identity.",
  "Catalog family": "Datasets, recipes, software, rentals, vehicles, job posts, and action surfaces.",
  "Page family": "Specialized page variants for about, contact, listings, search, and galleries.",
};

const highlightNames = new Set([
  "Article",
  "NewsArticle",
  "Course",
  "Quiz",
  "QAPage",
  "HowTo",
  "Product",
  "Review",
  "AggregateRating",
  "VideoObject",
  "BroadcastEvent",
  "Movie",
  "Organization",
  "ProfilePage",
  "WebSite",
  "Dataset",
  "SoftwareApplication",
  "JobPosting",
  "AboutPage",
  "SearchResultsPage",
  "RealEstateListing",
]);

const artifactKindOrder = ["type", "property", "enumeration", "datatype"];
const foundationalGeneratedTypeNames = new Set([
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
const artifactKindDescriptions = {
  type: "Class-like semantic entities, including authored runtime types and generated pass-through types.",
  property: "Schema.org property reference surfaces with compact payload previews.",
  enumeration: "Enumerated vocabularies rendered as labeled reference cards.",
  datatype: "Primitive semantic value surfaces for direct value-bearing payloads.",
};

const familyByName = new Map(governedFamilyEntries.map((entry) => [entry.name, entry.family]));
const familySlugByName = new Map(governedFamilyEntries.map((entry) => [entry.name, entry.familySlug]));
const fixtureByName = new Map(semanticFixtures.map((fixture) => [fixture.name, fixture]));
const metadataByName = new Map(GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS.map((artifact) => [artifact.name, artifact]));
const structuredDataAssetMap = getStructuredDataSchemaAssetMap();
const supportedObjectKinds = listStructuredDataSchemas()
  .map((entry) => entry.type)
  .filter((entry) => /^[A-Z]/u.test(entry));

const listingNamePattern = /(Listing|Rental|JobPosting)/;
const pageNamePattern = /(Page|Gallery|WebSite)$/;

function surfaceFocusForName(name) {
  const isListing = listingNamePattern.test(name);
  const isPage = pageNamePattern.test(name);
  if (isPage && isListing) return "page-or-listing";
  if (isPage) return "page";
  if (isListing) return "listing";
  return "all";
}

function matchesSurfaceFocus(entry, surface = "all") {
  if (surface === "all") return true;
  if (surface === "page") return entry.surfaceFocus === "page" || entry.surfaceFocus === "page-or-listing";
  if (surface === "listing") return entry.surfaceFocus === "listing" || entry.surfaceFocus === "page-or-listing";
  if (surface === "page-or-listing") return entry.surfaceFocus !== "all";
  return true;
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

function resolveSchemaAsset(assetPath) {
  if (structuredDataAssetMap[assetPath]) return structuredDataAssetMap[assetPath];
  if (assetPath.startsWith("generated-schemaorg-page-family/types/")) {
    return structuredDataAssetMap[assetPath.replace("generated-schemaorg-page-family/types/", "generated-schemaorg-full/types/")];
  }
  if (assetPath.startsWith("generated-schemaorg-page-family/enumerations/")) {
    return structuredDataAssetMap[assetPath.replace("generated-schemaorg-page-family/enumerations/", "generated-schemaorg-full/enumerations/")];
  }
  if (assetPath.startsWith("generated-schemaorg-page-family/datatypes/")) {
    return structuredDataAssetMap[assetPath.replace("generated-schemaorg-page-family/datatypes/", "generated-schemaorg-full/datatypes/")];
  }
  return undefined;
}

function sampleForResolvedSchema(assetPath, schema, kind, seen = new Set()) {
  const visitKey = `${assetPath}::${schema?.$id ?? schema?.title ?? kind}`;
  if (!schema || typeof schema !== "object" || seen.has(visitKey)) return undefined;
  seen.add(visitKey);

  if (typeof schema.$ref === "string") {
    const nextAssetPath = resolveAssetPath(assetPath, schema.$ref);
    return sampleForResolvedSchema(nextAssetPath, resolveSchemaAsset(nextAssetPath), kind, seen);
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

function schemaDerivedValueForArtifact(artifact) {
  const entry = getStructuredDataSchemaByType(artifact.name);
  if (!entry) return undefined;
  const entryAssetPath = assetKeyFromEntryAssetPath(entry.assetPath);
  const sample = sampleForResolvedSchema(entryAssetPath, entry.schema, artifact.name);
  const referencedSchema =
    artifact.kind === "property" && typeof entry.schema?.$ref === "string"
      ? resolveSchemaAsset(resolveAssetPath(entryAssetPath, entry.schema.$ref))
      : undefined;
  const referencedTypeValue = referencedSchema?.properties?.["@type"]?.const;
  const candidates = [
    artifact.kind === "type" && sample && typeof sample === "object" && !Array.isArray(sample)
      ? { "@type": sample["@type"] ?? artifact.name, ...sample }
      : undefined,
    artifact.kind === "property" && sample && typeof sample === "object" && !Array.isArray(sample) && sample["@type"]
      ? { "@type": sample["@type"] }
      : undefined,
    artifact.kind === "property" && referencedTypeValue
      ? { "@type": referencedTypeValue }
      : undefined,
    sample,
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
      const objectOnlyCandidate = { "@type": candidateKind };
      if (validateStructuredDataByType(artifact.name, objectOnlyCandidate).length === 0) return objectOnlyCandidate;
      const namedCandidate = { ...objectOnlyCandidate, name: `${candidateKind} sample` };
      if (validateStructuredDataByType(artifact.name, namedCandidate).length === 0) return namedCandidate;
    }
  }

  return sample;
}

function defaultTypeValueForArtifact(artifact) {
  const slug = artifact.slug ?? slugify(artifact.name);
  const label = artifact.name;
  const base = {
    "@type": artifact.name,
    name: `${label} sample`,
    description: `${label} generated demo sample.`,
    url: `https://mdwrk.test/schema/${slug}`,
    identifier: `urn:mdwrk:schema:${slug}`,
    image: [`https://mdwrk.test/assets/${slug}.png`],
    mainEntityOfPage: `https://mdwrk.test/schema/${slug}`,
    sameAs: [`https://example.test/schema/${slug}`],
    subjectOf: [{ "@type": "CreativeWork", name: `${label} reference`, url: `https://mdwrk.test/schema/${slug}/reference` }],
    owner: { "@type": "Organization", name: "MDWRK" },
    potentialAction: { "@type": "ReadAction", target: `https://mdwrk.test/schema/${slug}` },
  };

  switch (artifact.name) {
    case "Thing":
      return {
        ...base,
        additionalType: "https://schema.org/Thing",
      };
    case "CreativeWork":
      return {
        ...base,
        text: "Visible creative work body.",
        author: { "@type": "Person", name: "MDWRK Editorial" },
        publisher: { "@type": "Organization", name: "MDWRK Media" },
        datePublished: "2026-05-31",
      };
    case "BreadcrumbList":
      return {
        ...base,
        itemListElement: [
          { "@type": "ListItem", position: 1, item: { "@type": "Thing", name: "Home", url: "https://mdwrk.test/" } },
          { "@type": "ListItem", position: 2, item: { "@type": "Thing", name: "Docs", url: "https://mdwrk.test/docs" } },
        ],
      };
    case "ListItem":
      return {
        ...base,
        position: 1,
        item: { "@type": "Thing", name: "Prompt Studio", url: "https://mdwrk.test/prompt-studio" },
      };
    case "Offer":
      return {
        ...base,
        price: "49.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "MDWRK" },
        itemOffered: { "@type": "Thing", name: "Prompt Studio Pro" },
      };
    case "Place":
      return {
        ...base,
        address: {
          "@type": "PostalAddress",
          streetAddress: "1 Main Street",
          addressLocality: "Chicago",
          addressRegion: "IL",
          postalCode: "60601",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 41.8781,
          longitude: -87.6298,
        },
      };
    case "MonetaryAmount":
      return {
        ...base,
        currency: "USD",
        value: 49,
      };
    case "Action":
      return {
        ...base,
        agent: { "@type": "Person", name: "Operator" },
        object: { "@type": "Thing", name: "Release checklist" },
        target: `https://mdwrk.test/schema/${slug}/run`,
        result: { "@type": "Thing", name: "Completed review" },
      };
    case "ReadAction":
      return {
        ...base,
        agent: { "@type": "Person", name: "Operator" },
        object: { "@type": "CreativeWork", name: "Runbook" },
        target: `https://mdwrk.test/schema/${slug}/read`,
      };
    default:
      return base;
  }
}

function defaultValueForArtifact(artifact) {
  const schemaDerived = schemaDerivedValueForArtifact(artifact);
  if (schemaDerived !== undefined) return schemaDerived;

  if (artifact.kind === "datatype") {
    switch (artifact.name) {
      case "Boolean":
        return true;
      case "Number":
        return 42;
      case "Quantity":
        return "42 units";
      case "Date":
        return "2026-05-31";
      case "DateTime":
        return "2026-05-31T12:00:00Z";
      case "Time":
        return "12:00:00Z";
      default:
        return `${artifact.name} sample`;
    }
  }

  if (artifact.kind === "enumeration") {
    return artifact.name;
  }

  if (artifact.kind === "property") {
    return { name: `${artifact.name} sample`, value: artifact.name };
  }

  return defaultTypeValueForArtifact(artifact);
}

function defaultExamplesForArtifact(artifact) {
  if (artifact.kind === "property") return [{ name: `${artifact.name} example`, value: "Example value" }];
  if (artifact.kind === "enumeration") return [`${artifact.name} option`, `${artifact.name} fallback`];
  if (artifact.kind === "datatype") return [defaultValueForArtifact(artifact)];
  return [{ "@type": artifact.name, name: `${artifact.name} example` }];
}

function generatedDescriptionForArtifact(artifact) {
  if (artifact.kind === "property") return "Generated Schema.org property surface with a compact payload preview.";
  if (artifact.kind === "enumeration") return "Generated enumeration surface for a controlled vocabulary value.";
  if (artifact.kind === "datatype") return "Generated datatype surface for direct primitive semantic values.";
  return "Generated Schema.org type surface beyond the governed authored runtime catalog.";
}

function propsForGeneratedArtifact(artifact) {
  const description = generatedDescriptionForArtifact(artifact);
  const examples = defaultExamplesForArtifact(artifact);

  if (artifact.kind === "type" || artifact.kind === "property") {
    const value = defaultValueForArtifact(artifact);
    return value && typeof value === "object" && !Array.isArray(value)
      ? {
          ...value,
          examples,
          description,
        }
      : {
          value,
          examples,
          description,
        };
  }

  return {
    value: defaultValueForArtifact(artifact),
    examples,
    description,
  };
}

function structuredFieldValueForGeneratedArtifact(artifact, props) {
  const fieldEntries = Object.entries(props ?? {}).filter(([key]) => ![
    "body",
    "className",
    "description",
    "emitStructuredData",
    "examples",
    "structuredDataOverrides",
    "viewModel",
  ].includes(key));

  if (artifact.kind === "type" || artifact.kind === "property") {
    const fields = Object.fromEntries(fieldEntries);
    if (artifact.kind === "type" && fields["@type"] === undefined) fields["@type"] = artifact.name;
    return fields;
  }

  return { "@type": artifact.name, value: props?.value };
}

function coreEntryFromFixture(fixture) {
  const family = familyByName.get(fixture.name) ?? "Unassigned family";
  return {
    name: fixture.name,
    exportName: fixture.name,
    family,
    familySlug: familySlugByName.get(fixture.name) ?? slugify(family),
    kind: "type",
    slug: slugify(fixture.name),
    surfaceFocus: surfaceFocusForName(fixture.name),
    description: curatedDescriptionsByName[fixture.name] ?? "Governed first-class semantic component.",
    props: fixture.props,
    visible: fixture.visible,
  };
}

const governedCoreEntries = semanticFixtures.map(coreEntryFromFixture);

const highlightsEntriesByFamily = highlightFamilyOrder.map((family) => ({
  family,
  familySlug: slugify(family),
  description: highlightFamilyDescriptions[family],
  entries: governedCoreEntries.filter((entry) => entry.family === family && highlightNames.has(entry.name)),
})).filter((group) => group.entries.length > 0);

function groupEntriesByFamily(entries) {
  const grouped = new Map();
  for (const entry of entries) {
    const family = entry.family;
    if (!grouped.has(family)) {
      grouped.set(family, {
        family,
        familySlug: entry.familySlug,
        description: `${family} surfaces from the governed authored runtime.`,
        entries: [],
      });
    }
    grouped.get(family).entries.push(entry);
  }
  return [...grouped.values()];
}

export function buildGovernedCoreGroups({ family = "all", search = "", surface = "all" } = {}) {
  const normalizedSearch = search.trim().toLowerCase();
  const filtered = governedCoreEntries.filter((entry) => {
    if (family !== "all" && entry.family !== family) return false;
    if (!matchesSurfaceFocus(entry, surface)) return false;
    if (!normalizedSearch) return true;
    return [
      entry.name,
      entry.description,
      entry.family,
      ...(entry.visible ?? []),
    ].join(" ").toLowerCase().includes(normalizedSearch);
  });

  return groupEntriesByFamily(filtered);
}

const generatedArtifactEntries = GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS.map((artifact) => {
  const fixture = artifact.kind === "type" ? fixtureByName.get(artifact.name) : null;
  const props = fixture ? fixture.props : propsForGeneratedArtifact(artifact);
  return {
    artifactKind: artifact.kind,
    name: artifact.name,
    exportName: artifact.visibleExportName,
    slug: artifact.slug,
    shellSelector: artifact.shellSelector,
    family: familyByName.get(artifact.name) ?? `${artifact.kind[0].toUpperCase()}${artifact.kind.slice(1)} artifacts`,
    familySlug: familySlugByName.get(artifact.name) ?? slugify(`${artifact.kind} artifacts`),
    surfaceFocus: surfaceFocusForName(artifact.name),
    description: curatedDescriptionsByName[artifact.name] ?? generatedDescriptionForArtifact(artifact),
    props,
    structuredFields: structuredFieldValueForGeneratedArtifact(artifact, props),
    visible: fixture?.visible ?? [artifact.name],
  };
});

export function buildGeneratedArtifactView({ kind = "type", search = "", page = 1, pageSize = 24, surface = "all" } = {}) {
  const normalizedSearch = search.trim().toLowerCase();
  const filtered = generatedArtifactEntries.filter((entry) => {
    if (entry.artifactKind !== kind) return false;
    if (kind === "type" && !matchesSurfaceFocus(entry, surface)) return false;
    if (!normalizedSearch) return true;
    return [
      entry.name,
      entry.description,
      entry.family,
      entry.artifactKind,
    ].join(" ").toLowerCase().includes(normalizedSearch);
  });
  const prioritized = [...filtered];
  if (kind === "type" && surface !== "all") {
    prioritized.sort((left, right) => {
      const leftFoundation = foundationalGeneratedTypeNames.has(left.name) ? 1 : 0;
      const rightFoundation = foundationalGeneratedTypeNames.has(right.name) ? 1 : 0;
      if (leftFoundation !== rightFoundation) return rightFoundation - leftFoundation;
      return left.name.localeCompare(right.name);
    });
  }

  const safePageSize = Math.max(6, pageSize);
  const total = prioritized.length;
  const totalPages = Math.max(1, Math.ceil(total / safePageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * safePageSize;
  const entries = prioritized.slice(start, start + safePageSize);

  return {
    kind,
    title: `${kind[0].toUpperCase()}${kind.slice(1)} artifacts`,
    description: artifactKindDescriptions[kind],
    entries,
    total,
    currentPage,
    pageSize: safePageSize,
    totalPages,
  };
}

export const showcaseModes = [
  { value: "highlights", label: "Highlights" },
  { value: "governed-core", label: "Governed Core" },
  { value: "generated-surface", label: "Generated Surface" },
];

export const governedFamilyOptions = [
  { value: "all", label: "All families" },
  ...groupEntriesByFamily(governedCoreEntries).map((group) => ({ value: group.family, label: group.family })),
];

export const generatedArtifactKindOptions = artifactKindOrder.map((kind) => ({
  value: kind,
  label: `${kind[0].toUpperCase()}${kind.slice(1)}`,
}));

export const surfaceFocusOptions = [
  { value: "all", label: "All types" },
  { value: "page", label: "Pages" },
  { value: "listing", label: "Listings" },
  { value: "page-or-listing", label: "Pages + listings" },
];

export const generatedPageSizeOptions = [12, 24, 48, 96];

export const showcaseStats = {
  totalArtifacts: GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS.total,
  types: GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS.types,
  properties: GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS.properties,
  enumerations: GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS.enumerations,
  datatypes: GENERATED_SCHEMAORG_PAGE_FAMILY_COUNTS.datatypes,
  governedCore: governedCoreEntries.length,
  governedFamilies: governedFamilyOptions.length - 1,
};

export const qaViewLinks = [
  { label: "Highlights", href: "?mode=highlights" },
  { label: "Governed Core", href: "?mode=governed-core" },
  { label: "Generated Types", href: "?mode=generated-surface&kind=type" },
  { label: "Pages + Listings", href: "?mode=generated-surface&kind=type&surface=page-or-listing" },
  { label: "Generated Properties", href: "?mode=generated-surface&kind=property" },
  { label: "Generated Enumerations", href: "?mode=generated-surface&kind=enumeration" },
  { label: "Generated Datatypes", href: "?mode=generated-surface&kind=datatype" },
];

export const showcaseHeroCopy = "The semantic-components demo now acts as both a curated highlight reel and a full generated-surface explorer for the fused JSON-LD-emitting runtime.";

export const highlightsView = {
  familyCount: highlightsEntriesByFamily.length,
  groups: highlightsEntriesByFamily,
};

export { generatedArtifactEntries, governedCoreEntries, highlightFamilyOrder };
