import React from "react";
import {
  Badge,
  Card,
  CodeBlock,
  DataTable,
  JsonPreview,
  Pill,
  SelectField,
  Tabs,
} from "@mdwrk/lander-primitives";
import { usageForSpecimen } from "./showcase-artifact-manifest.mjs";

const createElement = React.createElement;

export const artifactDetailTabs = [
  { value: "overview", label: "Overview" },
  { value: "visible-specimen", label: "Visible Specimen" },
  { value: "jsonld-specimen", label: "JSON-LD Specimen" },
  { value: "schema", label: "Schema" },
  { value: "field-coverage", label: "Field Coverage" },
  { value: "react-usage", label: "React Usage" },
  { value: "styling", label: "Styling" },
  { value: "source-proof", label: "Source and Proof" },
];

const specimenOptions = [
  { value: "minimal", label: "Minimal" },
  { value: "typical", label: "Typical" },
  { value: "maximal", label: "Maximal" },
];

function SectionList({ items, emptyLabel }) {
  if (!items?.length) return createElement("p", { className: "semantic-demo__detail-empty mdwrk-primitive__text-fit-preserve" }, emptyLabel);
  return createElement(
    "ul",
    { className: "semantic-demo__detail-list" },
    ...items.map((item) => createElement("li", { key: item }, createElement("code", { className: "mdwrk-primitive__text-fit-structured" }, item))),
  );
}

function SummaryGrid({ rows }) {
  return createElement(
    "dl",
    { className: "semantic-demo__detail-summary-grid" },
    ...rows.map(([label, value]) =>
      createElement(
        "div",
        { key: label },
        createElement("dt", { className: "mdwrk-primitive__text-fit-preserve" }, label),
        createElement("dd", { className: "mdwrk-primitive__text-fit-preserve" }, value),
      ),
    ),
  );
}

function SpecimenControl({ specimenKey, onSpecimenChange }) {
  return createElement(SelectField, {
    className: "semantic-demo__detail-specimen-select",
    label: "Specimen",
    value: specimenKey,
    onChange: (event) => onSpecimenChange?.(event.target.value),
    options: specimenOptions,
  });
}

function emissionSummaryRows(manifest) {
  if (manifest.kind === "primitive") return [["Emitted", "n/a"], ["Accepted", "n/a"], ["Fail-closed", "n/a"]];
  return [
    ["Emitted", manifest.fields.filter((field) => field.jsonLd === "emitted").length],
    ["Accepted", manifest.fields.filter((field) => field.jsonLd === "accepted").length],
    ["Fail-closed", manifest.fields.filter((field) => field.jsonLd === "fail-closed").length],
  ];
}

function supportSummaryRows(manifest) {
  return [
    ["Fields", manifest.fields.length],
    ["Class hooks", manifest.classNames.length],
    ["Token files", manifest.tokenFiles.length],
    ["Proof paths", manifest.proofPaths.length],
  ];
}

function SupportSummaryContent({ manifest }) {
  return createElement(
    "div",
    { className: "semantic-demo__detail-summary-columns" },
    createElement(SummaryGrid, { rows: supportSummaryRows(manifest) }),
    createElement(SummaryGrid, { rows: emissionSummaryRows(manifest) }),
  );
}

function renderOverview(manifest) {
  return [
    createElement(
      Card,
      { className: "semantic-demo__detail-section semantic-demo__detail-section--wide", title: "Purpose", key: "purpose" },
      createElement("p", { className: "mdwrk-primitive__text-fit-preserve" }, manifest.description),
    ),
    createElement(
      Card,
      { className: "semantic-demo__detail-section", title: "Metadata", key: "metadata" },
      createElement(SummaryGrid, {
        rows: [
          ["Kind", manifest.kind],
          ["Status", manifest.status],
          ["Family", manifest.family],
          ["Surface", manifest.surface],
          ["Package", manifest.importPath],
          ["Export", manifest.exportName],
        ],
      }),
    ),
    createElement(
      Card,
      { className: "semantic-demo__detail-section", title: "Support summary", key: "summary" },
      createElement(SupportSummaryContent, { manifest }),
    ),
    createElement(
      Card,
      { className: "semantic-demo__detail-section", title: "Related artifacts", key: "related" },
      manifest.relatedArtifacts?.length
        ? createElement(SectionList, { items: manifest.relatedArtifacts.map((entry) => `${entry.kind}:${entry.name}`), emptyLabel: "No related artifacts recorded." })
        : createElement("p", { className: "semantic-demo__detail-empty mdwrk-primitive__text-fit-preserve" }, "No related artifacts recorded."),
    ),
  ];
}

function renderVisibleSpecimen({ manifest, specimen, specimenKey, onSpecimenChange, renderVisibleSpecimen, theme, viewport }) {
  return [
    createElement(
      Card,
      { className: "semantic-demo__detail-section semantic-demo__detail-section--wide", title: "Visible specimen", key: "visible-specimen" },
      createElement(
        "div",
        { className: "semantic-demo__detail-specimen-toolbar" },
        createElement(Badge, null, theme),
        createElement(Pill, null, viewport),
      ),
      createElement("p", { className: "semantic-demo__detail-note mdwrk-primitive__text-fit-preserve" }, specimen.visibleNotes),
      createElement("div", { className: "semantic-demo__detail-specimen" }, renderVisibleSpecimen?.(specimen) ?? null),
    ),
    createElement(
      Card,
      { className: "semantic-demo__detail-section semantic-demo__detail-section--wide", title: "Props", key: "props" },
      createElement(JsonPreview, { value: specimen.props }),
    ),
  ];
}

function renderJsonLdSpecimen({ manifest, specimen, specimenKey, onSpecimenChange }) {
  return [
    createElement(
      Card,
      { className: "semantic-demo__detail-section semantic-demo__detail-section--wide", title: "JSON-LD", key: "jsonld" },
      specimen.jsonLd
        ? createElement(JsonPreview, { value: specimen.jsonLd })
        : createElement("p", { className: "semantic-demo__detail-empty mdwrk-primitive__text-fit-preserve" }, "This primitive is visible-only and does not emit JSON-LD."),
    ),
  ];
}

function renderSchema(manifest) {
  return [
    createElement(
      Card,
      { className: "semantic-demo__detail-section semantic-demo__detail-section--wide", title: "Schema", key: "schema" },
      createElement(DataTable, {
        columns: ["Field", "Shape", "Required", "Visible", "JSON-LD", "Source", "Notes"],
        rows: manifest.fields.map((row) => ({
          Field: createElement("code", null, row.name),
          Shape: row.shape,
          Required: row.required,
          Visible: row.visible,
          "JSON-LD": row.jsonLd,
          Source: row.schemaSource,
          Notes: row.notes || " ",
        })),
      }),
    ),
  ];
}

function renderFieldCoverage({ specimen, specimenKey, onSpecimenChange, renderFieldCoverageSpecimen }) {
  return [
    createElement(
      Card,
      { className: "semantic-demo__detail-section semantic-demo__detail-section--wide", title: "Field coverage specimen", key: "field-coverage" },
      createElement(
        "p",
        { className: "semantic-demo__detail-note mdwrk-primitive__text-fit-preserve" },
        "Identifier-oriented coverage view for schema fields. This is a review/debug surface, not the visible component design.",
      ),
      renderFieldCoverageSpecimen?.(specimen) ?? createElement(JsonPreview, { value: specimen.jsonLd ?? specimen.props }),
    ),
  ];
}

function ReactUsageBlock({ title, language, code }) {
  return createElement(
    "section",
    { className: "semantic-demo__react-usage-block", "aria-label": title },
    createElement(
      "div",
      { className: "semantic-demo__react-usage-label" },
      createElement("span", { className: "mdwrk-primitive__text-fit-preserve" }, title),
      createElement("code", { className: "mdwrk-primitive__text-fit-structured" }, language),
    ),
    createElement(CodeBlock, { language, code }),
  );
}

function renderReactUsage(manifest, specimen, specimenKey, onSpecimenChange) {
  const usage = usageForSpecimen(manifest, specimen);
  return [
    createElement(
      "div",
      { className: "semantic-demo__react-usage semantic-demo__detail-section--wide", key: "react-usage-code" },
      createElement(ReactUsageBlock, { title: "Minimal usage", language: "tsx", code: usage.minimal }),
      createElement(ReactUsageBlock, { title: "Production usage", language: "tsx", code: usage.production }),
      createElement(ReactUsageBlock, { title: "Specimen payload", language: "json", code: usage.specimen }),
    ),
  ];
}

function renderStyling(manifest) {
  return [
    createElement(Card, { className: "semantic-demo__detail-section", title: "Class names", key: "class-names" }, createElement(SectionList, { items: manifest.classNames, emptyLabel: "No class hooks recorded." })),
    createElement(Card, { className: "semantic-demo__detail-section", title: "Data attributes", key: "data-attributes" }, createElement(SectionList, { items: manifest.dataAttributes, emptyLabel: "No data attributes recorded." })),
    createElement(Card, { className: "semantic-demo__detail-section", title: "Token files", key: "token-files" }, createElement(SectionList, { items: manifest.tokenFiles, emptyLabel: "No token files recorded." })),
    createElement(Card, { className: "semantic-demo__detail-section", title: "Token names", key: "token-names" }, createElement(SectionList, { items: manifest.tokenNames, emptyLabel: "No token names recorded." })),
  ];
}

function renderSourceProof(manifest) {
  return [
    createElement(Card, { className: "semantic-demo__detail-section", title: "Source", key: "source" }, createElement(SectionList, { items: manifest.sourcePaths, emptyLabel: "No source paths recorded." })),
    createElement(Card, { className: "semantic-demo__detail-section semantic-demo__detail-section--wide", title: "Proof", key: "proof" }, createElement(SectionList, { items: manifest.proofPaths, emptyLabel: "No proof paths recorded." })),
  ];
}

class DetailTabErrorBoundary extends React.Component {
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
        Card,
        { className: "semantic-demo__detail-section semantic-demo__detail-section--wide semantic-demo__card--error", title: "Detail tab failed to render" },
        createElement(
          "p",
          { className: "mdwrk-primitive__text-fit-preserve" },
          this.state.error?.message ?? "The active detail tab threw while rendering.",
        ),
      );
    }
    return this.props.children;
  }
}

function ArtifactDetailPanel({
  manifest,
  activeTab,
  specimen,
  specimenKey,
  onSpecimenChange,
  renderLiveSpecimen,
  renderFieldCoverageSpecimen = null,
  theme,
  viewport,
}) {
  if (activeTab === "visible-specimen") {
    return renderVisibleSpecimen({
      manifest,
      specimen,
      specimenKey,
      onSpecimenChange,
      renderVisibleSpecimen: renderLiveSpecimen,
      theme,
      viewport,
    });
  }
  if (activeTab === "jsonld-specimen") return renderJsonLdSpecimen({ manifest, specimen, specimenKey, onSpecimenChange });
  if (activeTab === "schema") return renderSchema(manifest);
  if (activeTab === "field-coverage") return renderFieldCoverage({ specimen, specimenKey, onSpecimenChange, renderFieldCoverageSpecimen });
  if (activeTab === "react-usage") return renderReactUsage(manifest, specimen, specimenKey, onSpecimenChange);
  if (activeTab === "styling") return renderStyling(manifest);
  if (activeTab === "source-proof") return renderSourceProof(manifest);
  return renderOverview(manifest);
}

export function ArtifactDetailPage({
  manifest,
  activeTab = "overview",
  onTabChange,
  specimenKey = "typical",
  onSpecimenChange,
  renderVisibleSpecimen: renderLiveSpecimen,
  renderFieldCoverageSpecimen,
  theme = "lander-light",
  viewport = "responsive",
}) {
  const safeTab = artifactDetailTabs.some((tab) => tab.value === activeTab) ? activeTab : "overview";
  const safeSpecimenKey = manifest.specimens[specimenKey] ? specimenKey : "typical";
  const specimen = manifest.specimens[safeSpecimenKey];

  return createElement(
    "article",
    {
      className: `semantic-demo__detail semantic-demo__detail--${manifest.kind}`,
      id: `detail-${manifest.slug}`,
    },
    createElement(
      "header",
      { className: "semantic-demo__detail-hero" },
      createElement(
        "div",
        { className: "semantic-demo__detail-copy" },
        createElement("a", { className: "semantic-demo__detail-link semantic-demo__detail-link--back", href: manifest.explorerHref }, "Back to explorer"),
        createElement("p", { className: "semantic-demo__kicker" }, `${manifest.kind} artifact`),
        createElement("h2", { className: "mdwrk-primitive__text-fit-heading" }, manifest.name),
        createElement("p", { className: "semantic-demo__detail-description mdwrk-primitive__text-fit-preserve" }, manifest.description),
        createElement(
          "div",
          { className: "semantic-demo__detail-meta" },
          createElement(Badge, { className: "mdwrk-primitive__text-fit-preserve" }, manifest.family),
          createElement(Pill, null, manifest.kind),
          createElement(Pill, null, manifest.status),
          createElement("a", { className: "semantic-demo__detail-link", href: manifest.routeHref }, "Permalink"),
        ),
      ),
      createElement(
        "div",
        { className: "semantic-demo__detail-aside" },
        createElement(
          "div",
          { className: "semantic-demo__detail-specimen-row" },
          createElement(SpecimenControl, { specimenKey: safeSpecimenKey, onSpecimenChange }),
        ),
      ),
    ),
    createElement(Tabs, {
      className: "semantic-demo__detail-tabs",
      items: artifactDetailTabs,
      value: safeTab,
      onChange: onTabChange,
    }),
    createElement(
      "section",
      { className: "semantic-demo__detail-grid" },
      createElement(
        DetailTabErrorBoundary,
        { resetKey: `${manifest.kind}:${manifest.name}:${safeTab}:${safeSpecimenKey}` },
        createElement(ArtifactDetailPanel, {
          manifest,
          activeTab: safeTab,
          specimen,
          specimenKey: safeSpecimenKey,
          onSpecimenChange,
          renderLiveSpecimen,
          renderFieldCoverageSpecimen,
          theme,
          viewport,
        }),
      ),
    ),
  );
}
