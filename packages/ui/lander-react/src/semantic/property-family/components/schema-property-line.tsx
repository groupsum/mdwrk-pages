import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLineProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLine({ value, description = "A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLineProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LinePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-line",
    shellClassName: "lander-semantic--schema-property-line",
    title: "line",
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
