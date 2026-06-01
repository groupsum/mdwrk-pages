import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoContainsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGeoContains({ value, description = "Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. \"a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a\". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGeoContainsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GeoContainsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-geo-contains",
    shellClassName: "lander-semantic--schema-property-geo-contains",
    title: "geoContains",
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
