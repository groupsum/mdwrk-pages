import React from "react";
import { ArtifactDetailPage } from "./showcase-artifact-detail.mjs";
import { primitiveEntries, PrimitiveGallery } from "./showcase-primitives.mjs";
import { buildPrimitiveDetailManifest } from "./showcase-primitive-manifest.mjs";

const createElement = React.createElement;

export function PrimitiveGalleryRoute({ buildHref }) {
  return createElement(PrimitiveGallery, { buildHref });
}

export function PrimitiveDetailRoute({
  detailName,
  theme,
  activeTab,
  specimenKey,
  viewport,
  onTabChange,
  onSpecimenChange,
}) {
  const entry = primitiveEntries.find((candidate) => candidate.name.toLowerCase() === detailName.toLowerCase());
  const manifest = buildPrimitiveDetailManifest(detailName, theme, primitiveEntries);
  if (!entry || !manifest) {
    return createElement(
      "section",
      { className: "semantic-demo__detail semantic-demo__detail--missing" },
      createElement("p", { className: "semantic-demo__kicker" }, "Detail route"),
      createElement("h2", { className: "mdwrk-primitive__text-fit-heading" }, "No matching primitive detail page"),
      createElement("p", { className: "mdwrk-primitive__text-fit-preserve" }, "The requested primitive is not present in the current manifest."),
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
    renderVisibleSpecimen: () => entry.render(),
    renderFieldCoverageSpecimen: () => null,
  });
}
