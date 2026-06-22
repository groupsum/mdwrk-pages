import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GeoOverlapsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoOverlapsProps extends GeoOverlapsPropertyInput, GeneratedPropertyUiProps<GeoOverlapsPropertyInput> {}

export function SchemaPropertyGeoOverlaps({ value: legacyValue, description = "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGeoOverlapsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GeoOverlapsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-geo-overlaps",
    shellClassName: "lander-semantic--schema-property-geo-overlaps",
    title: "geoOverlaps",
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

(SchemaPropertyGeoOverlaps as typeof SchemaPropertyGeoOverlaps & { toStructuredData: (props: SchemaPropertyGeoOverlapsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
