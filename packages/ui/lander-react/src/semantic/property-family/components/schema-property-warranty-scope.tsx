import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { WarrantyScopePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWarrantyScopeProps extends WarrantyScopePropertyInput, GeneratedPropertyUiProps<WarrantyScopePropertyInput> {}

export function SchemaPropertyWarrantyScope({ value: legacyValue, description = "The scope of the warranty promise.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyWarrantyScopeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WarrantyScopePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-warranty-scope",
    shellClassName: "lander-semantic--schema-property-warranty-scope",
    title: "warrantyScope",
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
