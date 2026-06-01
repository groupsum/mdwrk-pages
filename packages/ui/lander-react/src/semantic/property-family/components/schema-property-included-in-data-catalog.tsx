import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IncludedInDataCatalogPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIncludedInDataCatalogProps extends IncludedInDataCatalogPropertyInput, GeneratedPropertyUiProps<IncludedInDataCatalogPropertyInput> {}

export function SchemaPropertyIncludedInDataCatalog({ value: legacyValue, description = "A data catalog which contains this dataset.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIncludedInDataCatalogProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IncludedInDataCatalogPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-included-in-data-catalog",
    shellClassName: "lander-semantic--schema-property-included-in-data-catalog",
    title: "includedInDataCatalog",
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
