import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GeoContainsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoContainsProps extends GeoContainsPropertyInput, GeneratedPropertyUiProps<GeoContainsPropertyInput> {}

export function SchemaPropertyGeoContains({ value: legacyValue, description = "Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. \"a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a\". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGeoContainsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyGeoContains as typeof SchemaPropertyGeoContains & { toStructuredData: (props: SchemaPropertyGeoContainsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
