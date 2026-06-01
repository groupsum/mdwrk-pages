import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasCategoryCodePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasCategoryCodeProps extends HasCategoryCodePropertyInput, GeneratedPropertyUiProps<HasCategoryCodePropertyInput> {}

export function SchemaPropertyHasCategoryCode({ value: legacyValue, description = "A Category code contained in this code set.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasCategoryCodeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
