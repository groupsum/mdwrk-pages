import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeographicAreaProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGeographicArea({ value, description = "The geographic area associated with the audience.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGeographicAreaProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GeographicAreaPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-geographic-area",
    shellClassName: "lander-semantic--schema-property-geographic-area",
    title: "geographicArea",
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
