import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoIntersectsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGeoIntersects({ value, description = "Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGeoIntersectsProps) {
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
