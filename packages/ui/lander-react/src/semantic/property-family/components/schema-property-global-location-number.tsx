import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GlobalLocationNumberPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGlobalLocationNumberProps extends GlobalLocationNumberPropertyInput, GeneratedPropertyUiProps<GlobalLocationNumberPropertyInput> {}

export function SchemaPropertyGlobalLocationNumber({ value: legacyValue, description = "The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGlobalLocationNumberProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GlobalLocationNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-global-location-number",
    shellClassName: "lander-semantic--schema-property-global-location-number",
    title: "globalLocationNumber",
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
