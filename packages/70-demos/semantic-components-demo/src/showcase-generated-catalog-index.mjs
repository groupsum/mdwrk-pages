import {
  curatedDescriptionsByName,
  familyByName,
  familySlugByName,
  matchesSurfaceFocus,
  slugify,
  surfaceFocusForName,
} from "./showcase-catalog-index.mjs";
import { compactGeneratedArtifacts } from "./generated-artifact-index.mjs";

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

function generatedDescriptionForArtifact(artifact) {
  if (artifact.kind === "property") return "Generated Schema.org property surface with a compact payload preview.";
  if (artifact.kind === "enumeration") return "Generated enumeration surface for a controlled vocabulary value.";
  if (artifact.kind === "datatype") return "Generated datatype surface for direct primitive semantic values.";
  return "Generated Schema.org type surface beyond the governed authored runtime catalog.";
}

const generatedArtifactEntries = compactGeneratedArtifacts.map((artifact) => ({
  artifactKind: artifact.kind,
  name: artifact.name,
  exportName: artifact.visibleExportName,
  slug: artifact.slug,
  shellSelector: artifact.shellSelector,
  family: familyByName.get(artifact.name) ?? `${artifact.kind[0].toUpperCase()}${artifact.kind.slice(1)} artifacts`,
  familySlug: familySlugByName.get(artifact.name) ?? slugify(`${artifact.kind} artifacts`),
  surfaceFocus: surfaceFocusForName(artifact.name),
  description: curatedDescriptionsByName[artifact.name] ?? generatedDescriptionForArtifact(artifact),
}));

export function buildGeneratedArtifactDetailHref({ name, kind, theme, surface, mode = "generated-surface" }) {
  const params = new URLSearchParams();
  params.set("mode", mode);
  params.set("kind", kind);
  params.set("detailKind", kind);
  params.set("detailName", name);
  if (theme) params.set("theme", theme);
  if (surface && surface !== "all") params.set("surface", surface);
  return `?${params.toString()}`;
}

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

export { generatedArtifactEntries };
