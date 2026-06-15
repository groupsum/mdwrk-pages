import React, { useEffect, useMemo, useState } from "react";
import {
  Badge,
  Card as PrimitiveCard,
  Pagination,
} from "@mdwrk/lander-primitives";
import {
  buildGeneratedArtifactDetailHref,
  buildGeneratedArtifactView,
} from "./showcase-catalog.mjs";
import { ArtifactDetailPage } from "./showcase-artifact-detail.mjs";
import { buildGeneratedDetailManifest } from "./showcase-artifact-manifest.mjs";

const createElement = React.createElement;

const semanticModuleImporters = import.meta.glob("../../../packages/ui/lander-react/dist/semantic/**/*.js");
const semanticStyleImporters = import.meta.glob("../../../packages/ui/pages-ui-tokens/src/styles/semantic-*.css");
const semanticModuleEntries = Object.entries(semanticModuleImporters).filter(([path]) => (
  path.endsWith(".js")
  && !path.endsWith("/index.js")
  && !path.includes("/chunk-")
  && !path.endsWith("/shared.js")
));
const semanticModuleByExactPath = new Map(semanticModuleEntries);
const semanticModuleByBasename = new Map();
const semanticStyleByExactPath = new Map(Object.entries(semanticStyleImporters));
const semanticStyleByBasename = new Map();

for (const [path, importer] of semanticModuleEntries) {
  const basename = path.split("/").pop();
  if (!basename || semanticModuleByBasename.has(basename)) continue;
  semanticModuleByBasename.set(basename, importer);
}

for (const [path, importer] of Object.entries(semanticStyleImporters)) {
  const basename = path.split("/").pop();
  if (!basename || semanticStyleByBasename.has(basename)) continue;
  semanticStyleByBasename.set(basename, importer);
}

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const pascalToKebab = (value) => value.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

function prefixedArtifactSlug(entry, prefix) {
  return entry.slug.startsWith(`${prefix}-`) ? entry.slug : `${prefix}-${entry.slug}`;
}

function moduleCandidatesForEntry(entry) {
  if (entry.artifactKind === "property") {
    const moduleSlug = prefixedArtifactSlug(entry, "schema-property");
    return [
      `property-family/components/${moduleSlug}.js`,
      `${moduleSlug}.js`,
    ];
  }
  if (entry.artifactKind === "enumeration") {
    const moduleSlug = prefixedArtifactSlug(entry, "schema-enumeration");
    return [
      `enumeration-family/components/${moduleSlug}.js`,
      `${moduleSlug}.js`,
    ];
  }
  if (entry.artifactKind === "datatype") {
    const moduleSlug = prefixedArtifactSlug(entry, "schema-datatype");
    return [
      `datatype-family/components/${moduleSlug}.js`,
      `${moduleSlug}.js`,
    ];
  }
  if (entry.artifactKind === "type") {
    return [
      `${entry.slug}.js`,
      `${pascalToKebab(entry.name)}.js`,
      `generated-type-family/components/${entry.slug}.js`,
    ];
  }
  return [`${entry.slug}.js`];
}

function styleCandidatesForEntry(entry) {
  const candidateSlugs = [entry.slug];
  if (entry.artifactKind === "property") candidateSlugs.push(prefixedArtifactSlug(entry, "schema-property"));
  if (entry.artifactKind === "enumeration") candidateSlugs.push(prefixedArtifactSlug(entry, "schema-enumeration"));
  if (entry.artifactKind === "datatype") candidateSlugs.push(prefixedArtifactSlug(entry, "schema-datatype"));
  if (entry.artifactKind === "type") candidateSlugs.push(pascalToKebab(entry.name));
  return [...new Set(candidateSlugs)].map((slug) => `semantic-${slug}.css`);
}

async function loadSemanticArtifactStyle(entry) {
  for (const candidate of styleCandidatesForEntry(entry)) {
    const importer = semanticStyleByExactPath.get(`../../../packages/ui/pages-ui-tokens/src/styles/${candidate}`)
      ?? semanticStyleByBasename.get(candidate);
    if (!importer) continue;
    await importer();
    return true;
  }
  return false;
}

async function loadSemanticComponent(entry) {
  for (const candidate of moduleCandidatesForEntry(entry)) {
    const importer = candidate.includes("/")
      ? semanticModuleByExactPath.get(`../../../packages/ui/lander-react/dist/semantic/${candidate}`)
      : semanticModuleByBasename.get(candidate);
    if (!importer) continue;
    const module = await importer();
    const Component = module[entry.exportName] ?? module.default ?? module[Object.keys(module)[0]];
    if (Component) {
      await loadSemanticArtifactStyle(entry);
      return Component;
    }
  }
  return null;
}

function isPresentValue(value) {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.some((entry) => isPresentValue(entry));
  if (typeof value === "object") return Object.values(value).some((entry) => isPresentValue(entry));
  return true;
}

function fieldLabel(value) {
  if (value.startsWith("@")) return value;
  return value.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
}

function primitiveField(value) {
  return createElement("span", { className: "semantic-demo__field-value mdwrk-primitive__text-fit-preserve" }, String(value));
}

function renderStructuredFieldValue(value, depth = 0) {
  if (!isPresentValue(value)) return null;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return primitiveField(value);
  if (Array.isArray(value)) {
    return createElement(
      "div",
      { className: "semantic-demo__structured-stack" },
      ...value
        .filter((entry) => isPresentValue(entry))
        .map((entry, index) =>
          createElement(
            "section",
            { className: "semantic-demo__structured-nested", key: index },
            createElement(Badge, { className: "semantic-demo__field-label mdwrk-primitive__text-fit-preserve" }, `Item ${index + 1}`),
            renderStructuredFieldValue(entry, depth + 1),
          ),
        ),
    );
  }
  if (typeof value === "object") return renderStructuredFields(value, depth + 1);
  return primitiveField(value);
}

function renderStructuredFields(value, depth = 0) {
  const entries = Object.entries(value ?? {}).filter(([, entry]) => isPresentValue(entry));
  if (!entries.length) return null;
  return createElement(
    "div",
    { className: `semantic-demo__structured-grid semantic-demo__structured-grid--depth-${Math.min(depth, 2)}` },
    ...entries.map(([key, entry]) =>
      createElement(
        PrimitiveCard,
        { className: "semantic-demo__structured-field", key },
        createElement(Badge, { className: "semantic-demo__field-label mdwrk-primitive__text-fit-preserve" }, fieldLabel(key)),
        renderStructuredFieldValue(entry, depth + 1),
      ),
    ),
  );
}

function readableValue(value) {
  if (!isPresentValue(value)) return "";
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) return value.map((entry) => readableValue(entry)).filter(Boolean).join(", ");
  if (typeof value === "object") return value.name ?? value.url ?? value["@id"] ?? value["@type"] ?? JSON.stringify(value);
  return String(value);
}

function authoredFieldRows(props, structuredFields) {
  const source = props ?? structuredFields ?? {};
  const priority = ["name", "headline", "description", "actionStatus", "agent", "object", "target", "result", "url", "identifier", "keywords"];
  const seen = new Set();
  const rows = [];
  for (const key of priority) {
    const value = source[key] ?? structuredFields?.[key];
    if (!isPresentValue(value)) continue;
    seen.add(key);
    rows.push([key, value]);
  }
  for (const [key, value] of Object.entries(source)) {
    if (seen.has(key) || key.startsWith("@") || key === "body" || !isPresentValue(value)) continue;
    rows.push([key, value]);
    if (rows.length >= 8) break;
  }
  return rows;
}

function ActionDesignedSpecimen({ manifest, specimen, structuredFields }) {
  if (manifest?.name !== "Action" && manifest?.name !== "ReadAction") return null;
  const fields = { ...(structuredFields ?? {}), ...(specimen?.props ?? {}) };
  return createElement(
    PrimitiveCard,
    { className: "semantic-demo__designed-specimen semantic-demo__designed-specimen--action" },
    createElement(
      "header",
      { className: "semantic-demo__designed-action-header" },
      createElement(Badge, { className: "mdwrk-primitive__text-fit-preserve" }, fields.actionStatus ?? "Action"),
      createElement("div", null,
        createElement("h3", { className: "mdwrk-primitive__text-fit-heading" }, fields.name ?? `${manifest.name} specimen`),
        fields.description ? createElement("p", { className: "mdwrk-primitive__text-fit-preserve" }, fields.description) : null,
      ),
    ),
    createElement(
      "div",
      { className: "semantic-demo__designed-action-flow", "aria-label": "Action flow" },
      ...[
        ["Agent", fields.agent],
        ["Object", fields.object],
        ["Target", fields.target],
        ["Result", fields.result],
      ].filter(([, value]) => isPresentValue(value)).map(([label, value]) =>
        createElement(
          "section",
          { className: `semantic-demo__designed-action-node semantic-demo__designed-action-node--${slugify(label)}`, key: label },
          createElement("span", { className: "semantic-demo__designed-action-label mdwrk-primitive__text-fit-preserve" }, label),
          createElement("strong", { className: "semantic-demo__designed-action-value mdwrk-primitive__text-fit-preserve" }, readableValue(value)),
        ),
      ),
    ),
    createElement(
      "footer",
      { className: "semantic-demo__designed-action-footer" },
      fields.identifier ? createElement("code", { className: "mdwrk-primitive__text-fit-structured" }, fields.identifier) : null,
      Array.isArray(fields.keywords)
        ? fields.keywords.map((keyword) => createElement(Badge, { className: "mdwrk-primitive__text-fit-preserve", key: keyword }, keyword))
        : null,
    ),
  );
}

function AuthoredSpecimenPanel({ manifest, specimen, structuredFields }) {
  if (manifest?.name === "Action" || manifest?.name === "ReadAction") {
    return createElement(ActionDesignedSpecimen, { manifest, specimen, structuredFields });
  }
  const rows = authoredFieldRows(specimen?.props, structuredFields);
  if (!rows.length) return null;
  return createElement(
    PrimitiveCard,
    { className: "semantic-demo__authored-specimen" },
    createElement(
      "header",
      { className: "semantic-demo__authored-specimen-header" },
      createElement(Badge, { className: "mdwrk-primitive__text-fit-preserve" }, specimen?.label ?? "specimen"),
      createElement("div", null,
        createElement("h3", { className: "mdwrk-primitive__text-fit-heading" }, `${manifest?.name ?? "Artifact"} authored layout`),
        createElement("p", { className: "mdwrk-primitive__text-fit-preserve" }, "Primitive-backed view of the same specimen payload used for visible rendering, React usage, and JSON-LD preview."),
      ),
    ),
    createElement(
      "div",
      { className: "semantic-demo__authored-field-grid" },
      ...rows.map(([key, value]) =>
        createElement(
          "div",
          { className: `semantic-demo__authored-field semantic-demo__authored-field--${slugify(key)}`, key },
          createElement("span", { className: "semantic-demo__authored-field-label mdwrk-primitive__text-fit-preserve" }, fieldLabel(key)),
          createElement("strong", { className: "semantic-demo__authored-field-value mdwrk-primitive__text-fit-preserve" }, readableValue(value)),
        ),
      ),
    ),
  );
}

function StructuredFieldsPanel({ value }) {
  if (!isPresentValue(value)) return null;
  return createElement(
    PrimitiveCard,
    { className: "semantic-demo__structured-panel" },
    createElement(
      "header",
      { className: "semantic-demo__structured-header" },
      createElement("span", { className: "mdwrk-primitive__text-fit-preserve" }, "Coverage specimen"),
      createElement("h3", { className: "mdwrk-primitive__text-fit-heading" }, "Structured field identifiers"),
    ),
    renderStructuredFields(value),
  );
}

function composeComponentProps(props, structuredFields, specimenContext) {
  if (!structuredFields) return props;
  if (!specimenContext) {
    return props;
  }
  if (specimenContext.manifest?.name === "AboutPage") {
    return props;
  }
  const authoredPanel = specimenContext
    ? createElement(AuthoredSpecimenPanel, { ...specimenContext, structuredFields })
    : null;
  return {
    ...props,
    body: props?.body
      ? createElement(React.Fragment, null, props.body, authoredPanel)
      : authoredPanel,
  };
}

function componentDisplayProps(manifest, specimen) {
  const props = specimen.props ?? {};
  if (manifest.name === "Action" || manifest.name === "ReadAction") {
    return {
      name: props.name,
      description: props.description,
    };
  }
  return props;
}

class SpecimenErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidUpdate(previousProps) {
    if (previousProps.resetKey !== this.props.resetKey && this.state.error) {
      this.setState({ error: null });
    }
  }

  render() {
    if (this.state.error) {
      return createElement(
        "div",
        { className: "semantic-demo__card semantic-demo__card--error", role: "status" },
        createElement("strong", null, "Visible specimen could not render."),
        createElement(
          "p",
          { className: "mdwrk-primitive__text-fit-preserve" },
          this.state.error?.message ?? "The generated component threw while rendering this specimen.",
        ),
      );
    }
    return this.props.children;
  }
}

function useSemanticComponents(entries) {
  const [componentsByName, setComponentsByName] = useState({});
  const keys = useMemo(() => entries.map((entry) => `${entry.artifactKind}:${entry.name}`).join("|"), [entries]);

  useEffect(() => {
    let cancelled = false;
    const pendingEntries = entries.filter((entry) => !componentsByName[entry.name]);
    if (!pendingEntries.length) return undefined;

    Promise.all(pendingEntries.map(async (entry) => [entry.name, await loadSemanticComponent(entry)]))
      .then((loadedEntries) => {
        if (cancelled) return;
        setComponentsByName((current) => {
          const next = { ...current };
          for (const [name, component] of loadedEntries) {
            if (component) next[name] = component;
          }
          return next;
        });
      });

    return () => {
      cancelled = true;
    };
  }, [componentsByName, entries, keys]);

  return componentsByName;
}

function SemanticCardBody({ entry, theme, surface, Component }) {
  const detailHref = buildGeneratedArtifactDetailHref({ kind: entry.artifactKind, name: entry.name, theme, surface });

  return createElement(
    PrimitiveCard,
    {
      className: `semantic-demo__entry semantic-demo__entry--${slugify(entry.name)} semantic-demo__entry--tone-${slugify(entry.artifactKind)}`,
      id: `artifact-${slugify(entry.name)}`,
    },
    createElement(
      "div",
      { className: "semantic-demo__entry-meta" },
      createElement(Badge, { className: "mdwrk-primitive__text-fit-preserve" }, entry.name),
      createElement("p", { className: "mdwrk-primitive__text-fit-preview" }, entry.description),
    ),
    Component
      ? createElement(Component, { ...composeComponentProps(entry.props, entry.structuredFields), className: "semantic-demo__card" })
      : createElement("div", { className: "semantic-demo__card semantic-demo__card--loading" }, "Loading specimen..."),
    createElement("a", { className: "semantic-demo__detail-link", href: detailHref }, "Open detail page"),
  );
}

function SemanticEntryGrid({ entries, theme, surface, className }) {
  const componentsByName = useSemanticComponents(entries);
  return createElement(
    "div",
    { className },
    ...entries.map((entry) =>
      createElement(SemanticCardBody, {
        key: `${entry.artifactKind}-${entry.name}`,
        entry,
        theme,
        surface,
        Component: componentsByName[entry.name] ?? null,
      }),
    ),
  );
}

export function SemanticGroupSections({ groups, theme, surface }) {
  return groups.map((group) =>
    createElement(
      "section",
      {
        className: `semantic-demo__family semantic-demo__family--${slugify(group.family)}`,
        id: slugify(group.family),
        key: group.family,
      },
      createElement(
        "header",
        { className: "semantic-demo__family-header" },
        createElement(
          "div",
          null,
          createElement("p", { className: "semantic-demo__kicker" }, group.family),
          createElement("h2", null, `${group.entries.length} rendered examples`),
        ),
        createElement("p", null, group.description),
      ),
      createElement(SemanticEntryGrid, {
        entries: group.entries,
        theme,
        surface,
        className: `semantic-demo__grid semantic-demo__grid--${slugify(group.family)}`,
      }),
    ),
  );
}

export function GeneratedSurfaceSection({ kind, search, page, pageSize, surface, theme, onPageChange }) {
  const generatedView = buildGeneratedArtifactView({ kind, search, page, pageSize, surface });
  return createElement(
    "section",
    {
      className: `semantic-demo__family semantic-demo__family--${generatedView.kind}`,
      id: `generated-${generatedView.kind}`,
      key: `generated-${generatedView.kind}`,
    },
    createElement(
      "header",
      { className: "semantic-demo__family-header semantic-demo__family-header--generated" },
      createElement(
        "div",
        null,
        createElement("p", { className: "semantic-demo__kicker" }, generatedView.title),
        createElement("h2", null, `${generatedView.total} matching artifacts`),
      ),
      createElement("p", null, generatedView.description),
    ),
    createElement(
      "div",
      { className: "semantic-demo__generated-status" },
      createElement("p", null, `Showing ${generatedView.entries.length} of ${generatedView.total} artifacts`),
      createElement(Pagination, {
        className: "semantic-demo__pager",
        page: generatedView.currentPage,
        pageCount: generatedView.totalPages,
        onPageChange,
      }),
    ),
    createElement(SemanticEntryGrid, {
      entries: generatedView.entries,
      theme,
      surface,
      className: `semantic-demo__grid semantic-demo__grid--generated semantic-demo__grid--generated-${generatedView.kind}`,
    }),
  );
}

function SectionList({ items, emptyLabel }) {
  if (!items?.length) return createElement("p", { className: "semantic-demo__detail-empty mdwrk-primitive__text-fit-preserve" }, emptyLabel);
  return createElement(
    "ul",
    { className: "semantic-demo__detail-list" },
    ...items.map((item) => createElement("li", { key: item }, createElement("code", { className: "mdwrk-primitive__text-fit-structured" }, item))),
  );
}

export function GeneratedDetailPage({
  detailKind,
  detailName,
  kind,
  theme,
  surface,
  activeTab = "overview",
  specimenKey = "typical",
  viewport = "responsive",
  onTabChange,
  onSpecimenChange,
}) {
  const manifest = useMemo(
    () => buildGeneratedDetailManifest(detailName, detailKind === "type" ? kind ?? "type" : detailKind, theme, surface),
    [detailKind, detailName, kind, surface, theme],
  );
  const [Component, setComponent] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [componentResolved, setComponentResolved] = useState(false);

  useEffect(() => {
    let cancelled = false;
    if (!manifest) return undefined;
    setComponent(null);
    setLoadError(null);
    setComponentResolved(false);
    loadSemanticComponent({
      artifactKind: manifest.kind,
      exportName: manifest.exportName,
      name: manifest.name,
      slug: manifest.slug,
    }).then((resolved) => {
      if (cancelled) return;
      setComponent(() => resolved);
      setComponentResolved(true);
      if (!resolved) {
        setLoadError(new Error(`No semantic component module matched ${manifest.kind}:${manifest.name}.`));
      }
    }).catch((error) => {
      if (!cancelled) setLoadError(error);
      if (!cancelled) setComponentResolved(true);
    });
    return () => {
      cancelled = true;
    };
  }, [manifest]);

  if (!manifest) {
    return createElement(
      "section",
      { className: "semantic-demo__detail semantic-demo__detail--missing" },
      createElement("p", { className: "semantic-demo__kicker" }, "Detail route"),
      createElement("h2", { className: "mdwrk-primitive__text-fit-heading" }, "No matching artifact detail page"),
      createElement("p", { className: "mdwrk-primitive__text-fit-preserve" }, "The requested generated artifact is not present in the current manifest."),
    );
  }

  return createElement(ArtifactDetailPage, {
    manifest,
    activeTab,
    onTabChange,
    specimenKey,
    onSpecimenChange,
    theme,
    viewport,
    renderVisibleSpecimen: (specimen) => {
      if (loadError) {
        return createElement(
          "div",
          { className: "semantic-demo__card semantic-demo__card--error", role: "status" },
          createElement("strong", null, "Visible specimen module could not load."),
          createElement("p", { className: "mdwrk-primitive__text-fit-preserve" }, loadError.message ?? "Unknown module loading error."),
        );
      }
      return Component
        ? createElement(
            SpecimenErrorBoundary,
            { resetKey: `${manifest.kind}:${manifest.name}:${specimen.label}` },
            createElement(
              React.Fragment,
              null,
              createElement(Component, {
                ...composeComponentProps(
                  componentDisplayProps(manifest, specimen),
                  specimen.jsonLd,
                  { manifest, specimen },
                ),
                className: "semantic-demo__card",
              }),
              ),
          )
        : componentResolved
          ? createElement("div", { className: "semantic-demo__card semantic-demo__card--error", role: "status" }, "Visible specimen component was not found.")
          : createElement("div", { className: "semantic-demo__card semantic-demo__card--loading" }, "Loading specimen...");
    },
    renderFieldCoverageSpecimen: (specimen) => createElement(StructuredFieldsPanel, { value: specimen.jsonLd }),
  });
}
