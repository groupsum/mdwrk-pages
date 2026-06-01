import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPolygonProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPolygon({ value, description = "A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPolygonProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PolygonPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-polygon",
    shellClassName: "lander-semantic--schema-property-polygon",
    title: "polygon",
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
