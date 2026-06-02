import React from "react";
import * as landerReact from "@mdwrk/lander-react";
import {
  Badge,
  Card,
  Cluster,
  DataTable,
  JsonPreview,
  Pill,
} from "@mdwrk/lander-primitives";
import {
  buildGeneratedArtifactDetailEntry,
  buildGeneratedArtifactDetailHref,
} from "./showcase-catalog.mjs";
import { primitiveEntries, primitiveSlug } from "./showcase-primitives.mjs";

const createElement = React.createElement;
const componentMap = landerReact;

const primitiveSourceFiles = {
  Actions: "packages/ui/lander-primitives/src/actions.tsx",
  Content: "packages/ui/lander-primitives/src/content.tsx",
  Feedback: "packages/ui/lander-primitives/src/feedback.tsx",
  Forms: "packages/ui/lander-primitives/src/forms.tsx",
  Navigation: "packages/ui/lander-primitives/src/navigation.tsx",
  Media: "packages/ui/lander-primitives/src/media.tsx",
  Overlays: "packages/ui/lander-primitives/src/overlays.tsx",
  Layout: "packages/ui/lander-primitives/src/layout.tsx",
};

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
      required: "varies",
      notes: "See the live specimen and source file for the primitive-specific contract.",
    },
  ];
}

function buildPrimitiveDetailEntry(name, theme) {
  const entry = primitiveEntries.find((candidate) => candidate.name.toLowerCase() === name.toLowerCase());
  if (!entry) return null;
  return {
    detailKind: "primitive",
    name: entry.name,
    slug: entry.slug,
    title: entry.name,
    eyebrow: "primitive surface",
    family: entry.family,
    description: entry.description,
    schemaRows: primitiveContractRows(entry),
    specimenProps: {
      primitive: entry.name,
      family: entry.family,
      marker: entry.slug,
      lightTheme: true,
      darkTheme: true,
    },
    structuredFields: null,
    classNames: [`[data-mdwrk-primitive="${entry.slug}"]`, `.mdwrk-primitive--${entry.slug}`],
    tokenFiles: [`packages/ui/pages-ui-tokens/src/styles/primitive-${entry.familySlug}.css`],
    proofPaths: [
      primitiveSourceFiles[entry.family],
      "packages/ui/lander-primitives/tests/primitives-t0.test.mjs",
      "packages/ui/lander-primitives/tests/primitives-t1.test.mjs",
      "packages/ui/lander-primitives/tests/primitives-t2.test.mjs",
      "examples/semantic-components-demo/tests/semantic-components-demo-t1.test.mjs",
    ],
    routeHref: buildPrimitiveDetailHref({ name: entry.name, theme }),
    explorerHref: `?mode=primitives${theme ? `&theme=${theme}` : ""}`,
    jsonLdExample: null,
    renderSpecimen: entry.render,
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

export function resolveDetailEntry({ detailKind, detailName, kind, theme, surface }) {
  if (!detailKind || !detailName) return null;
  if (detailKind === "primitive") return buildPrimitiveDetailEntry(detailName, theme);
  return buildGeneratedArtifactDetailEntry(detailName, detailKind === "type" ? kind ?? "type" : detailKind, surface);
}

function renderDetailSpecimen(detail) {
  if (detail.detailKind === "primitive") return detail.renderSpecimen();
  const Component = componentMap[detail.exportName];
  if (!Component) return createElement("p", null, "Component export not available in the current demo runtime.");
  return createElement(Component, { ...detail.specimenProps, className: "semantic-demo__card" });
}

function SectionList({ items, emptyLabel }) {
  if (!items?.length) return createElement("p", { className: "semantic-demo__detail-empty" }, emptyLabel);
  return createElement(
    "ul",
    { className: "semantic-demo__detail-list" },
    ...items.map((item) => createElement("li", { key: item }, createElement("code", null, item))),
  );
}

export function DetailPage({ detailKind, detailName, kind, theme, surface }) {
  const detail = resolveDetailEntry({ detailKind, detailName, kind, theme, surface });
  if (!detail) {
    return createElement(
      "section",
      { className: "semantic-demo__detail semantic-demo__detail--missing" },
      createElement("p", { className: "semantic-demo__kicker" }, "Detail route"),
      createElement("h2", null, "No matching artifact detail page"),
      createElement("p", null, "The requested primitive or generated artifact is not present in the current manifest."),
    );
  }

  return createElement(
    "article",
    {
      className: `semantic-demo__detail semantic-demo__detail--${detail.detailKind}`,
      id: `detail-${detail.slug}`,
    },
    createElement(
      "header",
      { className: "semantic-demo__detail-hero" },
      createElement(
        "div",
        { className: "semantic-demo__detail-copy" },
        createElement("a", { className: "semantic-demo__detail-link semantic-demo__detail-link--back", href: detail.explorerHref }, "Back to explorer"),
        createElement("p", { className: "semantic-demo__kicker" }, detail.eyebrow),
        createElement("h2", null, detail.title),
        createElement("p", { className: "semantic-demo__detail-description" }, detail.description),
        createElement(
          Cluster,
          { className: "semantic-demo__detail-meta" },
          createElement(Badge, null, detail.family),
          createElement(Pill, null, detail.detailKind),
          createElement("a", { className: "semantic-demo__detail-link", href: detail.routeHref }, "Permalink"),
        ),
      ),
      createElement(
        Card,
        { className: "semantic-demo__detail-summary", title: "Support summary" },
        createElement(
          "dl",
          { className: "semantic-demo__detail-summary-grid" },
          createElement("div", null, createElement("dt", null, "Class hooks"), createElement("dd", null, detail.classNames.length)),
          createElement("div", null, createElement("dt", null, "Token files"), createElement("dd", null, detail.tokenFiles.length)),
          createElement("div", null, createElement("dt", null, "Schema rows"), createElement("dd", null, detail.schemaRows.length)),
          createElement("div", null, createElement("dt", null, "Proof paths"), createElement("dd", null, detail.proofPaths.length)),
        ),
      ),
    ),
    createElement(
      "section",
      { className: "semantic-demo__detail-grid" },
      createElement(
        Card,
        { className: "semantic-demo__detail-section", title: "Live specimen" },
        createElement("div", { className: "semantic-demo__detail-specimen" }, renderDetailSpecimen(detail)),
      ),
      createElement(
        Card,
        { className: "semantic-demo__detail-section", title: "Example specimen" },
        createElement(JsonPreview, { value: detail.specimenProps }),
      ),
      createElement(
        Card,
        { className: "semantic-demo__detail-section semantic-demo__detail-section--wide", title: "Schema" },
        createElement(DataTable, {
          columns: ["Field", "Shape", "Required", "Notes"],
          rows: detail.schemaRows.map((row) => ({
            Field: createElement("code", null, row.field),
            Shape: row.shape,
            Required: row.required,
            Notes: row.notes || " ",
          })),
        }),
      ),
      createElement(
        Card,
        { className: "semantic-demo__detail-section", title: "JSON-LD" },
        detail.jsonLdExample
          ? createElement(JsonPreview, { value: detail.jsonLdExample })
          : createElement("p", { className: "semantic-demo__detail-empty" }, "This primitive is visible-only and does not emit JSON-LD."),
      ),
      createElement(
        Card,
        { className: "semantic-demo__detail-section", title: "Class names" },
        createElement(SectionList, { items: detail.classNames, emptyLabel: "No class hooks recorded." }),
      ),
      createElement(
        Card,
        { className: "semantic-demo__detail-section", title: "Tokens" },
        createElement(SectionList, { items: detail.tokenFiles, emptyLabel: "No token files recorded." }),
      ),
      createElement(
        Card,
        { className: "semantic-demo__detail-section", title: "Proof" },
        createElement(SectionList, { items: detail.proofPaths, emptyLabel: "No proof paths recorded." }),
      ),
    ),
  );
}
