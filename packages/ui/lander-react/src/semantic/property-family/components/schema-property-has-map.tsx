import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasMapProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasMap({ value, description = "A URL to a map of the place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasMapProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasMapPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-map",
    shellClassName: "lander-semantic--schema-property-has-map",
    title: "hasMap",
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
