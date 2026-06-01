import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MapsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMapsProps extends MapsPropertyInput, GeneratedPropertyUiProps<MapsPropertyInput> {}

export function SchemaPropertyMaps({ value: legacyValue, description = "A URL to a map of the place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMapsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MapsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-maps",
    shellClassName: "lander-semantic--schema-property-maps",
    title: "maps",
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
