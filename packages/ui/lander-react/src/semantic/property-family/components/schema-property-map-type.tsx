import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MapTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMapTypeProps extends MapTypePropertyInput, GeneratedPropertyUiProps<MapTypePropertyInput> {}

export function SchemaPropertyMapType({ value: legacyValue, description = "Indicates the kind of Map, from the MapCategoryType Enumeration.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMapTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MapTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-map-type",
    shellClassName: "lander-semantic--schema-property-map-type",
    title: "mapType",
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
