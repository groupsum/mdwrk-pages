import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMedianProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMedian({ value, description = "The median value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMedianProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MedianPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-median",
    shellClassName: "lander-semantic--schema-property-median",
    title: "median",
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
