import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EstimatedCostPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEstimatedCostProps extends EstimatedCostPropertyInput, GeneratedPropertyUiProps<EstimatedCostPropertyInput> {}

export function SchemaPropertyEstimatedCost({ value: legacyValue, description = "The estimated cost of the supply or supplies consumed when performing instructions.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEstimatedCostProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyEstimatedCost as typeof SchemaPropertyEstimatedCost & { toStructuredData: (props: SchemaPropertyEstimatedCostProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
