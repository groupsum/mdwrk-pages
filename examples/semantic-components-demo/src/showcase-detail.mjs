import React, { useState } from "react";
import * as landerReact from "@mdwrk/lander-react";
import {
  Badge,
  Card,
  Cluster,
  DataTable,
  JsonPreview,
  Pill,
  Tabs,
} from "@mdwrk/lander-primitives";
import {
  buildGeneratedArtifactDetailEntry,
  buildGeneratedArtifactDetailHref,
} from "./showcase-catalog.mjs";
import { primitiveEntries, primitiveSlug } from "./showcase-primitives.mjs";
import { ArtifactDetailPage } from "./showcase-artifact-detail.mjs";
import {
  buildGeneratedDetailManifest,
} from "./showcase-artifact-manifest.mjs";
import { buildPrimitiveDetailManifest } from "./showcase-primitive-manifest.mjs";

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
  if (!items?.length) return createElement("p", { className: "semantic-demo__detail-empty mdwrk-primitive__text-fit-preserve" }, emptyLabel);
  return createElement(
    "ul",
    { className: "semantic-demo__detail-list" },
    ...items.map((item) => createElement("li", { key: item }, createElement("code", { className: "mdwrk-primitive__text-fit-structured" }, item))),
  );
}

export function DetailPage({ detailKind, detailName, kind, theme, surface }) {
  const detail = resolveDetailEntry({ detailKind, detailName, kind, theme, surface });
  const manifest = detailKind === "primitive"
    ? buildPrimitiveDetailManifest(detailName, theme, primitiveEntries)
    : buildGeneratedDetailManifest(detailName, detailKind === "type" ? kind ?? "type" : detailKind, theme, surface);
  const [activeTab, setActiveTab] = useState("overview");
  const [specimenKey, setSpecimenKey] = useState("typical");
  if (!detail) {
    return createElement(
      "section",
      { className: "semantic-demo__detail semantic-demo__detail--missing" },
      createElement("p", { className: "semantic-demo__kicker" }, "Detail route"),
      createElement("h2", { className: "mdwrk-primitive__text-fit-heading" }, "No matching artifact detail page"),
      createElement("p", { className: "mdwrk-primitive__text-fit-preserve" }, "The requested primitive or generated artifact is not present in the current manifest."),
    );
  }

  return createElement(ArtifactDetailPage, {
    manifest,
    activeTab,
    onTabChange: setActiveTab,
    specimenKey,
    onSpecimenChange: setSpecimenKey,
    theme,
    viewport: "responsive",
    renderVisibleSpecimen: (specimen) => renderDetailSpecimen({ ...detail, specimenProps: specimen.props }),
  });
}
