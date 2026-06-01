import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoDisjointProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGeoDisjoint({ value, description = "Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: \"they have no point in common. They form a set of disconnected geometries.\" (A symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).)", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGeoDisjointProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GeoDisjointPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-geo-disjoint",
    shellClassName: "lander-semantic--schema-property-geo-disjoint",
    title: "geoDisjoint",
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
