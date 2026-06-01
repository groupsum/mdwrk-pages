import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReleaseOfProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReleaseOf({ value, description = "The album this is a release of.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReleaseOfProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReleaseOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-release-of",
    shellClassName: "lander-semantic--schema-property-release-of",
    title: "releaseOf",
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
