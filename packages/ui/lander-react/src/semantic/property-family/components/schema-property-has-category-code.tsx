import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasCategoryCodeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasCategoryCode({ value, description = "A Category code contained in this code set.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasCategoryCodeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasCategoryCodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-category-code",
    shellClassName: "lander-semantic--schema-property-has-category-code",
    title: "hasCategoryCode",
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
