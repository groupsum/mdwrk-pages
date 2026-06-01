import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ManufacturerPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyManufacturerProps extends ManufacturerPropertyInput, GeneratedPropertyUiProps<ManufacturerPropertyInput> {}

export function SchemaPropertyManufacturer({ value: legacyValue, description = "The manufacturer of the product.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyManufacturerProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ManufacturerPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-manufacturer",
    shellClassName: "lander-semantic--schema-property-manufacturer",
    title: "manufacturer",
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
