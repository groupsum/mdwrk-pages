import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoCoversProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGeoCovers({ value, description = "Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. \"Every point of b is a point of (the interior or boundary of) a\". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGeoCoversProps) {
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
