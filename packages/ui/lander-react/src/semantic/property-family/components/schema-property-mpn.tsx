import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MpnPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMpnProps extends MpnPropertyInput, GeneratedPropertyUiProps<MpnPropertyInput> {}

export function SchemaPropertyMpn({ value: legacyValue, description = "The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMpnProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MpnPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-mpn",
    shellClassName: "lander-semantic--schema-property-mpn",
    title: "mpn",
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
