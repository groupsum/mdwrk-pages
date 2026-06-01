import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReleaseNotesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReleaseNotesProps extends ReleaseNotesPropertyInput, GeneratedPropertyUiProps<ReleaseNotesPropertyInput> {}

export function SchemaPropertyReleaseNotes({ value: legacyValue, description = "Description of what changed in this version.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReleaseNotesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReleaseNotesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-release-notes",
    shellClassName: "lander-semantic--schema-property-release-notes",
    title: "releaseNotes",
    value,
    description,
    examples,
    body,
    className,
    emitStructuredData,
    structuredDataOverrides,
    viewModel,
  });
}
