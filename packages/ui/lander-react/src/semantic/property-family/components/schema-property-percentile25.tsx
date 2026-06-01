import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPercentile25Props extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPercentile25({ value, description = "The 25th percentile value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPercentile25Props) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.Percentile25PropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-percentile25",
    shellClassName: "lander-semantic--schema-property-percentile25",
    title: "percentile25",
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
