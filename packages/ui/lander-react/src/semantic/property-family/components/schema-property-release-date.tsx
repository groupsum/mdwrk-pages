import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReleaseDateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReleaseDate({ value, description = "The release date of a product or product model. This can be used to distinguish the exact variant of a product.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReleaseDateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReleaseDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-release-date",
    shellClassName: "lander-semantic--schema-property-release-date",
    title: "releaseDate",
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
