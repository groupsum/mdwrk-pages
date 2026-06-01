import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CatalogNumberPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCatalogNumberProps extends CatalogNumberPropertyInput, GeneratedPropertyUiProps<CatalogNumberPropertyInput> {}

export function SchemaPropertyCatalogNumber({ value: legacyValue, description = "The catalog number for the release.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCatalogNumberProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CatalogNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-catalog-number",
    shellClassName: "lander-semantic--schema-property-catalog-number",
    title: "catalogNumber",
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
