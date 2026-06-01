import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPercentile10Props extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPercentile10({ value, description = "The 10th percentile value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPercentile10Props) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.Percentile10PropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-percentile10",
    shellClassName: "lander-semantic--schema-property-percentile10",
    title: "percentile10",
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
