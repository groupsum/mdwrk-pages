import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReleaseNotesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReleaseNotes({ value, description = "Description of what changed in this version.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReleaseNotesProps) {
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
