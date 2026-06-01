import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { WarrantyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWarrantyProps extends WarrantyPropertyInput, GeneratedPropertyUiProps<WarrantyPropertyInput> {}

export function SchemaPropertyWarranty({ value: legacyValue, description = "The warranty promise(s) included in the offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyWarrantyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WarrantyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-warranty",
    shellClassName: "lander-semantic--schema-property-warranty",
    title: "warranty",
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
