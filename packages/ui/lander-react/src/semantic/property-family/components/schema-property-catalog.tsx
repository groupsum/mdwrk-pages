import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CatalogPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCatalogProps extends CatalogPropertyInput, GeneratedPropertyUiProps<CatalogPropertyInput> {}

export function SchemaPropertyCatalog({ value: legacyValue, description = "A data catalog which contains this dataset.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCatalogProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CatalogPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-catalog",
    shellClassName: "lander-semantic--schema-property-catalog",
    title: "catalog",
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
