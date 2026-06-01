import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFoodWarningProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFoodWarning({ value, description = "Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFoodWarningProps) {
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
