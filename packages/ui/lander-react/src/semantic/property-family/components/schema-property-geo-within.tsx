import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoWithinProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGeoWithin({ value, description = "Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGeoWithinProps) {
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
