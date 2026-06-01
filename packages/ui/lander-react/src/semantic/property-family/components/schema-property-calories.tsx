import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CaloriesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCaloriesProps extends CaloriesPropertyInput, GeneratedPropertyUiProps<CaloriesPropertyInput> {}

export function SchemaPropertyCalories({ value: legacyValue, description = "The number of calories.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCaloriesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CaloriesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-calories",
    shellClassName: "lander-semantic--schema-property-calories",
    title: "calories",
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
