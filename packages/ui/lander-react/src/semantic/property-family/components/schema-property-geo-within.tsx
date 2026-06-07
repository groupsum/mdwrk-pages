import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GeoWithinPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoWithinProps extends GeoWithinPropertyInput, GeneratedPropertyUiProps<GeoWithinPropertyInput> {}

export function SchemaPropertyGeoWithin({ value: legacyValue, description = "Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGeoWithinProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GeoWithinPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-geo-within",
    shellClassName: "lander-semantic--schema-property-geo-within",
    title: "geoWithin",
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

(SchemaPropertyGeoWithin as typeof SchemaPropertyGeoWithin & { toStructuredData: (props: SchemaPropertyGeoWithinProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
