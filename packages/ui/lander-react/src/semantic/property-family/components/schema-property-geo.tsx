import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGeo({ value, description = "The geo coordinates of the place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGeoProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GeoPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-geo",
    shellClassName: "lander-semantic--schema-property-geo",
    title: "geo",
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
