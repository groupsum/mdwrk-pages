import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { WeightPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWeightProps extends WeightPropertyInput, GeneratedPropertyUiProps<WeightPropertyInput> {}

export function SchemaPropertyWeight({ value: legacyValue, description = "The weight of the product or person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyWeightProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WeightPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-weight",
    shellClassName: "lander-semantic--schema-property-weight",
    title: "weight",
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

(SchemaPropertyWeight as typeof SchemaPropertyWeight & { toStructuredData: (props: SchemaPropertyWeightProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
