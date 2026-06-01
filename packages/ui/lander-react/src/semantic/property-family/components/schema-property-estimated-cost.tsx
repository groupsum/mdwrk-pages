import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEstimatedCostProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEstimatedCost({ value, description = "The estimated cost of the supply or supplies consumed when performing instructions.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEstimatedCostProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EstimatedCostPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-estimated-cost",
    shellClassName: "lander-semantic--schema-property-estimated-cost",
    title: "estimatedCost",
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
