import React, { useEffect, useState } from "react";
import {
  Badge,
  Card as PrimitiveCard,
} from "@mdwrk/lander-primitives";
import { ArtifactDetailPage } from "./showcase-artifact-detail.mjs";

const createElement = React.createElement;

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

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
  const [manifest, setManifest] = useState(null);
  const [manifestResolved, setManifestResolved] = useState(false);
  const [manifestError, setManifestError] = useState(null);
  const [Component, setComponent] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [componentResolved, setComponentResolved] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setManifest(null);
    setManifestResolved(false);
    setManifestError(null);

    import("./showcase-artifact-manifest.mjs")
      .then(({ buildGeneratedDetailManifest }) => {
        if (cancelled) return;
        const resolvedManifest = buildGeneratedDetailManifest(
          detailName,
          detailKind === "type" ? kind ?? "type" : detailKind,
          theme,
          surface,
        );
        setManifest(resolvedManifest);
        setManifestResolved(true);
      })
      .catch((error) => {
        if (cancelled) return;
        setManifestError(error);
        setManifestResolved(true);
      });

    return () => {
      cancelled = true;
    };
  }, [detailKind, detailName, kind, surface, theme]);

  useEffect(() => {
    let cancelled = false;
    if (!manifest) return undefined;
    setComponent(null);
    setLoadError(null);
    setComponentResolved(false);
    import("./showcase-semantic-component-loader.mjs").then(({ loadSemanticComponent }) => loadSemanticComponent({
      artifactKind: manifest.kind,
      exportName: manifest.exportName,
      name: manifest.name,
      slug: manifest.slug,
    })).then((resolved) => {
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

  if (manifestError) {
    return createElement(
      "section",
      { className: "semantic-demo__detail semantic-demo__detail--missing", role: "status" },
      createElement("p", { className: "semantic-demo__kicker" }, "Detail route"),
      createElement("h2", { className: "mdwrk-primitive__text-fit-heading" }, "Artifact detail manifest could not load"),
      createElement("p", { className: "mdwrk-primitive__text-fit-preserve" }, manifestError.message ?? "Unknown manifest loading error."),
    );
  }

  if (!manifestResolved) {
    return createElement(
      "section",
      { className: "semantic-demo__detail semantic-demo__detail--loading", role: "status" },
      createElement("p", { className: "semantic-demo__kicker" }, "Detail route"),
      createElement("h2", { className: "mdwrk-primitive__text-fit-heading" }, "Loading artifact detail manifest"),
      createElement("p", { className: "mdwrk-primitive__text-fit-preserve" }, "The generated artifact detail data is loading separately from the visible runtime."),
    );
  }

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
