import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ExtendedAddressPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExtendedAddressProps extends ExtendedAddressPropertyInput, GeneratedPropertyUiProps<ExtendedAddressPropertyInput> {}

export function SchemaPropertyExtendedAddress({ value: legacyValue, description = "An address extension such as an apartment number, C/O or alternative name.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyExtendedAddressProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ExtendedAddressPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-extended-address",
    shellClassName: "lander-semantic--schema-property-extended-address",
    title: "extendedAddress",
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
