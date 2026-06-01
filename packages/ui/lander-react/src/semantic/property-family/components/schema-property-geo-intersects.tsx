import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GeoIntersectsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoIntersectsProps extends GeoIntersectsPropertyInput, GeneratedPropertyUiProps<GeoIntersectsPropertyInput> {}

export function SchemaPropertyGeoIntersects({ value: legacyValue, description = "Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGeoIntersectsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GeoIntersectsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-geo-intersects",
    shellClassName: "lander-semantic--schema-property-geo-intersects",
    title: "geoIntersects",
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
