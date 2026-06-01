import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GeoTouchesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoTouchesProps extends GeoTouchesPropertyInput, GeneratedPropertyUiProps<GeoTouchesPropertyInput> {}

export function SchemaPropertyGeoTouches({ value: legacyValue, description = "Represents spatial relations in which two geometries (or the places they represent) touch: \"they have at least one boundary point in common, but no interior points.\" (A symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).)", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGeoTouchesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GeoTouchesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-geo-touches",
    shellClassName: "lander-semantic--schema-property-geo-touches",
    title: "geoTouches",
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
