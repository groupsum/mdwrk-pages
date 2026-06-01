import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FoodWarningPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFoodWarningProps extends FoodWarningPropertyInput, GeneratedPropertyUiProps<FoodWarningPropertyInput> {}

export function SchemaPropertyFoodWarning({ value: legacyValue, description = "Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFoodWarningProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FoodWarningPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-food-warning",
    shellClassName: "lander-semantic--schema-property-food-warning",
    title: "foodWarning",
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
