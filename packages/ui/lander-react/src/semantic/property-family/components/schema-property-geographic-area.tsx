import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GeographicAreaPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeographicAreaProps extends GeographicAreaPropertyInput, GeneratedPropertyUiProps<GeographicAreaPropertyInput> {}

export function SchemaPropertyGeographicArea({ value: legacyValue, description = "The geographic area associated with the audience.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGeographicAreaProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GeographicAreaPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-geographic-area",
    shellClassName: "lander-semantic--schema-property-geographic-area",
    title: "geographicArea",
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
