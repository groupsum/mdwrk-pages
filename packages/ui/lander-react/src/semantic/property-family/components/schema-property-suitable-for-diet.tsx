import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySuitableForDietProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySuitableForDiet({ value, description = "Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySuitableForDietProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SuitableForDietPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-suitable-for-diet",
    shellClassName: "lander-semantic--schema-property-suitable-for-diet",
    title: "suitableForDiet",
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
