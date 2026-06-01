import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPercentile75Props extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPercentile75({ value, description = "The 75th percentile value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPercentile75Props) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.Percentile75PropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-percentile75",
    shellClassName: "lander-semantic--schema-property-percentile75",
    title: "percentile75",
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
