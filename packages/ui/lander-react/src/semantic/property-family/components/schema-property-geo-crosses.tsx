import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GeoCrossesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoCrossesProps extends GeoCrossesPropertyInput, GeneratedPropertyUiProps<GeoCrossesPropertyInput> {}

export function SchemaPropertyGeoCrosses({ value: legacyValue, description = "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: \"a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them\". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGeoCrossesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GeoCrossesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-geo-crosses",
    shellClassName: "lander-semantic--schema-property-geo-crosses",
    title: "geoCrosses",
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
