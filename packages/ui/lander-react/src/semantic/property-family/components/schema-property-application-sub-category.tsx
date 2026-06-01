import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ApplicationSubCategoryPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyApplicationSubCategoryProps extends ApplicationSubCategoryPropertyInput, GeneratedPropertyUiProps<ApplicationSubCategoryPropertyInput> {}

export function SchemaPropertyApplicationSubCategory({ value: legacyValue, description = "Subcategory of the application, e.g. 'Arcade Game'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyApplicationSubCategoryProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ApplicationSubCategoryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-application-sub-category",
    shellClassName: "lander-semantic--schema-property-application-sub-category",
    title: "applicationSubCategory",
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
