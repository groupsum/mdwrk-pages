import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPercentile90Props extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPercentile90({ value, description = "The 90th percentile value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPercentile90Props) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.Percentile90PropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-percentile90",
    shellClassName: "lander-semantic--schema-property-percentile90",
    title: "percentile90",
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
