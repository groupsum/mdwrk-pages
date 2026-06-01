import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NaicsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNaicsProps extends NaicsPropertyInput, GeneratedPropertyUiProps<NaicsPropertyInput> {}

export function SchemaPropertyNaics({ value: legacyValue, description = "The North American Industry Classification System (NAICS) code for a particular organization or business person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNaicsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NaicsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-naics",
    shellClassName: "lander-semantic--schema-property-naics",
    title: "naics",
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
