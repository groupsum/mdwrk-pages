import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GeoCoversPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoCoversProps extends GeoCoversPropertyInput, GeneratedPropertyUiProps<GeoCoversPropertyInput> {}

export function SchemaPropertyGeoCovers({ value: legacyValue, description = "Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. \"Every point of b is a point of (the interior or boundary of) a\". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGeoCoversProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GeoCoversPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-geo-covers",
    shellClassName: "lander-semantic--schema-property-geo-covers",
    title: "geoCovers",
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

(SchemaPropertyGeoCovers as typeof SchemaPropertyGeoCovers & { toStructuredData: (props: SchemaPropertyGeoCoversProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
