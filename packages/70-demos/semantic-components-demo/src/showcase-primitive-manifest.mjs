const primitiveSourceFiles = {
  Actions: "packages/30-ui-foundation/lander-primitives/src/actions.tsx",
  Content: "packages/30-ui-foundation/lander-primitives/src/content.tsx",
  Feedback: "packages/30-ui-foundation/lander-primitives/src/feedback.tsx",
  Forms: "packages/30-ui-foundation/lander-primitives/src/forms.tsx",
  Navigation: "packages/30-ui-foundation/lander-primitives/src/navigation.tsx",
  Media: "packages/30-ui-foundation/lander-primitives/src/media.tsx",
  Overlays: "packages/30-ui-foundation/lander-primitives/src/overlays.tsx",
  Layout: "packages/30-ui-foundation/lander-primitives/src/layout.tsx",
};

function presentEntries(value) {
  return Object.entries(value ?? {}).filter(([, entry]) => entry !== undefined && entry !== null && entry !== "");
}

function primitiveContractRows(entry) {
  return [
    {
      field: "className",
      shape: "string",
      required: "optional",
      notes: "Additional class hook on the visible primitive shell.",
    },
    {
      field: "data-mdwrk-primitive",
      shape: `const ${entry.slug}`,
      required: "yes",
      notes: "Stable primitive marker used by runtime tests and consumers.",
    },
    {
      field: "children / primitive props",
      shape: "ReactNode | primitive-specific props",
      required: "optional",
      notes: "Primitive-specific public props accepted by this surface.",
    },
  ];
}

function primitiveSpecimens(entry) {
  const typical = { primitive: entry.name, family: entry.family, marker: entry.slug, lightTheme: true, darkTheme: true };
  return {
    minimal: {
      label: "minimal",
      props: { primitive: entry.name, marker: entry.slug },
      jsonLd: null,
      visibleNotes: "Smallest useful primitive specimen.",
    },
    typical: {
      label: "typical",
      props: typical,
      jsonLd: null,
      visibleNotes: "Default primitive specimen for screenshots and docs.",
    },
    maximal: {
      label: "maximal",
      props: { ...typical, className: `demo-${entry.slug}` },
      jsonLd: null,
      visibleNotes: "Broad primitive specimen for layout and state checks.",
    },
  };
}

function usageForPrimitive(manifest) {
  const propLines = presentEntries(manifest.specimens.typical.props)
    .slice(0, 8)
    .map(([key, value]) => `  ${key}={${JSON.stringify(value)}}`);
  return {
    minimal: `import { ${manifest.exportName} } from "${manifest.importPath}";\n\n<${manifest.exportName} />`,
    production: `import { ${manifest.exportName} } from "${manifest.importPath}";\n\n<${manifest.exportName}\n${propLines.join("\n")}\n/>`,
    specimen: JSON.stringify(manifest.specimens.typical.props, null, 2),
  };
}

export function buildPrimitiveDetailHref({ name, theme }) {
  const params = new URLSearchParams();
  params.set("mode", "primitives");
  params.set("detailKind", "primitive");
  params.set("detailName", name);
  if (theme) params.set("theme", theme);
  return `?${params.toString()}`;
}

export function buildPrimitiveDetailManifest(name, theme, primitiveEntries = []) {
  const entry = primitiveEntries.find((candidate) => candidate.name.toLowerCase() === name.toLowerCase());
  if (!entry) return null;
  const proofPaths = [
    primitiveSourceFiles[entry.family],
    "packages/30-ui-foundation/lander-primitives/tests/primitives-t0.test.mjs",
    "packages/30-ui-foundation/lander-primitives/tests/primitives-t1.test.mjs",
    "packages/30-ui-foundation/lander-primitives/tests/primitives-t2.test.mjs",
    "packages/70-demos/semantic-components-demo/tests/semantic-components-demo-t1.test.mjs",
  ].filter(Boolean);
  const specimens = primitiveSpecimens(entry);
  const manifest = {
    name: entry.name,
    kind: "primitive",
    family: entry.family,
    surface: "primitive",
    status: "implemented",
    description: entry.description,
    detailHref: buildPrimitiveDetailHref({ name: entry.name, theme }),
    exportName: entry.name,
    importPath: "@mdwrk/lander-primitives",
    sourcePaths: proofPaths.slice(0, 1),
    tokenFiles: [`packages/30-ui-foundation/pages-ui-tokens/src/styles/primitive-${entry.familySlug}.css`],
    tokenNames: [`primitive-${entry.familySlug}`],
    classNames: [`[data-mdwrk-primitive="${entry.slug}"]`, `.mdwrk-primitive--${entry.slug}`],
    dataAttributes: [`data-mdwrk-primitive="${entry.slug}"`],
    fields: primitiveContractRows(entry).map((row) => ({
      name: row.field,
      shape: row.shape,
      required: row.required === "yes" ? "yes" : "optional",
      schemaSource: "primitive-api",
      visible: "accepted",
      jsonLd: "not-applicable",
      notes: row.notes,
    })),
    specimens,
    relatedArtifacts: [],
    proofPaths,
    routeHref: buildPrimitiveDetailHref({ name: entry.name, theme }),
    explorerHref: `?mode=primitives${theme ? `&theme=${theme}` : ""}`,
    slug: entry.slug,
    usage: null,
  };
  manifest.usage = usageForPrimitive(manifest);
  return manifest;
}

export function prefetchPrimitiveDetailManifest() {
  return Promise.resolve();
}
