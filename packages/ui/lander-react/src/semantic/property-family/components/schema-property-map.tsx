import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MapPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMapProps extends MapPropertyInput, GeneratedPropertyUiProps<MapPropertyInput> {}

export function SchemaPropertyMap({ value: legacyValue, description = "A URL to a map of the place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMapProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MapPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-map",
    shellClassName: "lander-semantic--schema-property-map",
    title: "map",
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
