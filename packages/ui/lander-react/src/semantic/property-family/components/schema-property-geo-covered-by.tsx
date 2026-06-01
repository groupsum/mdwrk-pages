import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GeoCoveredByPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoCoveredByProps extends GeoCoveredByPropertyInput, GeneratedPropertyUiProps<GeoCoveredByPropertyInput> {}

export function SchemaPropertyGeoCoveredBy({ value: legacyValue, description = "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGeoCoveredByProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GeoCoveredByPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-geo-covered-by",
    shellClassName: "lander-semantic--schema-property-geo-covered-by",
    title: "geoCoveredBy",
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
