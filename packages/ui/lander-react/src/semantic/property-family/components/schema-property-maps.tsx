import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMapsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMaps({ value, description = "A URL to a map of the place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMapsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MapsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-maps",
    shellClassName: "lander-semantic--schema-property-maps",
    title: "maps",
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
