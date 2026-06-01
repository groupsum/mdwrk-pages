import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NutritionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNutritionProps extends NutritionPropertyInput, GeneratedPropertyUiProps<NutritionPropertyInput> {}

export function SchemaPropertyNutrition({ value: legacyValue, description = "Nutrition information about the recipe or menu item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNutritionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NutritionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-nutrition",
    shellClassName: "lander-semantic--schema-property-nutrition",
    title: "nutrition",
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
