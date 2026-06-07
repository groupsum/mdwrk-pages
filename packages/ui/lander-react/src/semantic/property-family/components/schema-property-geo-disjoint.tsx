import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GeoDisjointPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoDisjointProps extends GeoDisjointPropertyInput, GeneratedPropertyUiProps<GeoDisjointPropertyInput> {}

export function SchemaPropertyGeoDisjoint({ value: legacyValue, description = "Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: \"they have no point in common. They form a set of disconnected geometries.\" (A symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).)", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGeoDisjointProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyGeoDisjoint as typeof SchemaPropertyGeoDisjoint & { toStructuredData: (props: SchemaPropertyGeoDisjointProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
