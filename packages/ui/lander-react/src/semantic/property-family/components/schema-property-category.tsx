import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCategoryProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCategory({ value, description = "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCategoryProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CategoryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-category",
    shellClassName: "lander-semantic--schema-property-category",
    title: "category",
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
