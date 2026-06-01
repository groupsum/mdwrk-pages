import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoOverlapsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGeoOverlaps({ value, description = "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGeoOverlapsProps) {
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
