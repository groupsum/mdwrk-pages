import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNutritionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNutrition({ value, description = "Nutrition information about the recipe or menu item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNutritionProps) {
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
