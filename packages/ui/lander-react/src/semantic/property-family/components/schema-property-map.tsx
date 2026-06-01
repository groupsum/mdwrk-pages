import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMapProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMap({ value, description = "A URL to a map of the place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMapProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MapPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-map",
    shellClassName: "lander-semantic--schema-property-map",
    title: "map",
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
