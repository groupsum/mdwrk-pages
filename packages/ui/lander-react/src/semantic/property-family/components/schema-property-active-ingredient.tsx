import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyActiveIngredientProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyActiveIngredient({ value, description = "An active ingredient, typically chemical compounds and/or biologic substances.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyActiveIngredientProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ActiveIngredientPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-active-ingredient",
    shellClassName: "lander-semantic--schema-property-active-ingredient",
    title: "activeIngredient",
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
