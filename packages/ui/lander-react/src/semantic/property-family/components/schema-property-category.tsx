import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CategoryPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCategoryProps extends CategoryPropertyInput, GeneratedPropertyUiProps<CategoryPropertyInput> {}

export function SchemaPropertyCategory({ value: legacyValue, description = "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCategoryProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
