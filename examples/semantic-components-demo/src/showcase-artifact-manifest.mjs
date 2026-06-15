import {
  buildGeneratedArtifactDetailHref,
  generatedArtifactEntries,
} from "./showcase-generated-catalog-index.mjs";

const helperPropNames = new Set([
  "body",
  "className",
  "emitStructuredData",
  "examples",
  "structuredDataOverrides",
  "viewModel",
]);

function presentEntries(value) {
  return Object.entries(value ?? {}).filter(([, entry]) => entry !== undefined && entry !== null && entry !== "");
}

function samplePropsForGeneratedArtifact(entry) {
  const description = entry.description;
  if (entry.artifactKind === "datatype" || entry.artifactKind === "enumeration") {
    return {
      value: entry.artifactKind === "datatype" && entry.name === "Boolean" ? true : `${entry.name} sample`,
      description,
    };
  }
  if (entry.artifactKind === "property") {
    return {
      name: `${entry.name} sample`,
      value: entry.name,
      description,
    };
  }
  return {
    "@type": entry.name,
    name: `${entry.name} sample`,
    description,
    url: `https://mdwrk.test/schema/${entry.slug}`,
  };
}

function schemaRowsFromProps(entry, props) {
  const rows = Object.keys(props ?? {})
    .filter((key) => !helperPropNames.has(key))
    .map((key) => ({
      field: key,
      shape: key === "@type" ? `const ${entry.name}` : "string | number | boolean | object",
      required: key === "@type" ? "yes" : "optional",
      notes: "Runtime documentation row derived from the generated artifact specimen.",
    }));
  if (!rows.some((row) => row.field === "@type")) {
    rows.unshift({
      field: "@type",
      shape: `const ${entry.name}`,
      required: "yes",
      notes: "Generated artifact identity.",
    });
  }
  return rows;
}

function buildGeneratedArtifactDetailEntry(name, kindHint) {
  const entry = generatedArtifactEntries.find((candidate) => (
    candidate.name.toLowerCase() === name.toLowerCase()
    && (!kindHint || candidate.artifactKind === kindHint)
  ));
  if (!entry) return null;
  const props = samplePropsForGeneratedArtifact(entry);
  return {
    detailKind: entry.artifactKind,
    name: entry.name,
    slug: entry.slug,
    family: entry.family,
    description: entry.description,
    exportName: entry.exportName,
    schemaRows: schemaRowsFromProps(entry, props),
    specimenProps: props,
    classNames: [entry.shellSelector, ".semantic-demo__card", "className prop supported on visible shell"],
    tokenFiles: [`packages/ui/pages-ui-tokens/src/styles/semantic-${entry.slug}.css`],
    proofPaths: [
      "packages/ui/lander-react/src/semantic/generated-components.tsx",
      "examples/semantic-components-demo/tests/semantic-components-demo-t1.test.mjs",
    ],
    routeHref: buildGeneratedArtifactDetailHref({ kind: entry.artifactKind, name: entry.name }),
    explorerHref: `?mode=generated-surface&kind=${entry.artifactKind}${entry.artifactKind === "type" && entry.surfaceFocus !== "all" ? `&surface=${entry.surfaceFocus}` : ""}`,
  };
}

function propsToJsonLd(detail, props) {
  if (detail.detailKind === "primitive") return null;
  const fields = Object.fromEntries(presentEntries(props).filter(([key]) => !helperPropNames.has(key)));
  if (detail.detailKind === "datatype" || detail.detailKind === "enumeration") {
    return { "@type": detail.name, value: fields.value ?? props?.value ?? detail.name };
  }
  return { ...fields, "@type": fields["@type"] ?? detail.name };
}

function compactProps(props, detail) {
  if (!props || typeof props !== "object" || Array.isArray(props)) return props;
  const keep = ["@type", "name", "headline", "title", "value", "description", "url"];
  const entries = keep.filter((key) => props[key] !== undefined).map((key) => [key, props[key]]);
  if (!entries.length && detail.detailKind !== "primitive") entries.push(["name", `${detail.name} minimal specimen`]);
  return Object.fromEntries(entries);
}

function maximalProps(props, detail) {
  if (detail.detailKind === "primitive") return props;
  return {
    ...props,
    identifier: props?.identifier ?? `urn:mdwrk:demo:${detail.slug}`,
    keywords: props?.keywords ?? ["schema.org", detail.name, "mdwrk"],
  };
}

function curatedSpecimenProps(detail, props) {
  if (detail.detailKind !== "type") return props;
  if (detail.name === "Action") {
    return {
      name: "Review release checklist",
      description: "A release manager reviews the generated surface checklist before publication.",
      actionStatus: "CompletedActionStatus",
      agent: { name: "Alex Rivera", url: "https://mdwrk.test/team/alex-rivera" },
      object: "Generated Schema.org surface readiness checklist",
      target: "https://mdwrk.test/actions/release-review",
      result: "Publication approval note",
    };
  }
  if (detail.name === "ReadAction") {
    return {
      name: "Read implementation guide",
      description: "A developer reads the generated surface implementation guide before wiring a detail page.",
      agent: { name: "MDWRK engineer", url: "https://mdwrk.test/team" },
      object: "Generated artifact detail page guide",
      target: "https://mdwrk.test/docs/generated-artifact-detail-pages",
    };
  }
  return props;
}

function buildSpecimens(detail, typicalProps) {
  const typical = curatedSpecimenProps(detail, typicalProps ?? {});
  const minimal = compactProps(typical, detail);
  const maximal = maximalProps(typical, detail);
  return {
    minimal: {
      label: "minimal",
      props: minimal,
      jsonLd: propsToJsonLd(detail, minimal),
      visibleNotes: "Smallest useful specimen for import and smoke verification.",
    },
    typical: {
      label: "typical",
      props: typical,
      jsonLd: propsToJsonLd(detail, typical),
      visibleNotes: "Default production-like specimen for screenshots and docs.",
    },
    maximal: {
      label: "maximal",
      props: maximal,
      jsonLd: propsToJsonLd(detail, maximal),
      visibleNotes: "Broad specimen for layout, wrapping, and field-coverage checks.",
    },
  };
}

function supportStatusForDetail(detail) {
  if (detail.detailKind === "primitive") return "implemented";
  if (detail.classNames?.length && detail.tokenFiles?.length && detail.schemaRows?.length) return "implemented";
  return "partial";
}

function normalizeFieldRows(detail, specimens) {
  const typicalProps = specimens.typical.props ?? {};
  const typicalJson = specimens.typical.jsonLd ?? {};
  return (detail.schemaRows ?? []).map((row) => {
    const name = row.field ?? row.name;
    const hasVisible = typicalProps[name] !== undefined;
    const hasJson = typicalJson?.[name] !== undefined;
    return {
      name,
      shape: row.shape ?? "unknown",
      required: row.required === "yes" ? "yes" : "optional",
      inheritedFrom: row.inheritedFrom,
      schemaSource: detail.detailKind === "primitive" ? "primitive-api" : "schema.org",
      visible: hasVisible ? "rendered" : "accepted",
      jsonLd: detail.detailKind === "primitive" ? "not-applicable" : hasJson ? "emitted" : "accepted",
      notes: row.notes ?? "",
    };
  });
}

function usageForManifest(manifest) {
  return usageForSpecimen(manifest, manifest.specimens.typical);
}

export function usageForSpecimen(manifest, specimen) {
  const componentName = manifest.exportName || manifest.name;
  const importPath = manifest.importPath;
  const selectedProps = specimen?.props ?? {};
  const propLines = presentEntries(selectedProps)
    .map(([key, value]) => `  ${key}={${JSON.stringify(value)}}`);
  return {
    minimal: `import { ${componentName} } from "${importPath}";\n\n<${componentName} />`,
    production: `import { ${componentName} } from "${importPath}";\n\n<${componentName}\n${propLines.join("\n")}\n/>`,
    specimen: JSON.stringify(selectedProps, null, 2),
  };
}

function baseManifest(detail, overrides = {}) {
  const specimens = buildSpecimens(detail, detail.specimenProps);
  const fields = normalizeFieldRows(detail, specimens);
  const manifest = {
    name: detail.name,
    kind: detail.detailKind,
    family: detail.family,
    surface: detail.surface ?? "reference",
    status: supportStatusForDetail(detail),
    description: detail.description,
    detailHref: detail.routeHref,
    exportName: detail.exportName ?? detail.name,
    importPath: detail.detailKind === "primitive" ? "@mdwrk/lander-primitives" : "@mdwrk/lander-react",
    sourcePaths: detail.proofPaths?.slice(0, 1) ?? [],
    tokenFiles: detail.tokenFiles ?? [],
    tokenNames: (detail.tokenFiles ?? []).map((file) => file.split("/").pop()?.replace(/\.css$/u, "")).filter(Boolean),
    classNames: detail.classNames ?? [],
    dataAttributes: detail.detailKind === "primitive" ? [`data-mdwrk-primitive="${detail.slug}"`] : [`data-schema-artifact="${detail.slug}"`],
    fields,
    specimens,
    relatedArtifacts: [],
    proofPaths: detail.proofPaths ?? [],
    routeHref: detail.routeHref,
    explorerHref: detail.explorerHref,
    slug: detail.slug,
    usage: null,
    ...overrides,
  };
  manifest.usage = usageForManifest(manifest);
  return manifest;
}

export function buildGeneratedDetailManifest(name, kindHint, theme, surface) {
  const detail = buildGeneratedArtifactDetailEntry(name, kindHint);
  if (!detail) return null;
  return baseManifest(detail, {
    surface: surface ?? "reference",
    detailHref: buildGeneratedArtifactDetailHref({ kind: detail.detailKind, name: detail.name, theme, surface }),
    routeHref: buildGeneratedArtifactDetailHref({ kind: detail.detailKind, name: detail.name, theme, surface }),
    sourcePaths: detail.proofPaths?.slice(0, 2) ?? [],
  });
}

export function prefetchGeneratedDetailManifest() {
  return Promise.resolve();
}
