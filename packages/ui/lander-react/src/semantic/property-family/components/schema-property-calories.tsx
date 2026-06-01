import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCaloriesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCalories({ value, description = "The number of calories.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCaloriesProps) {
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
