import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { WeightPercentagePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWeightPercentageProps extends WeightPercentagePropertyInput, GeneratedPropertyUiProps<WeightPercentagePropertyInput> {}

export function SchemaPropertyWeightPercentage({ value: legacyValue, description = "Value representing the fraction of the weight that is used to compute the shipping price. Example: 0.10 and a shipping weight of 15kg would add $1.5 to the order price, where the $ is the currency of the order.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyWeightPercentageProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WeightPercentagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-weight-percentage",
    shellClassName: "lander-semantic--schema-property-weight-percentage",
    title: "weightPercentage",
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
