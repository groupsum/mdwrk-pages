import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GeoPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoProps extends GeoPropertyInput, GeneratedPropertyUiProps<GeoPropertyInput> {}

export function SchemaPropertyGeo({ value: legacyValue, description = "The geo coordinates of the place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGeoProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GeoPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-geo",
    shellClassName: "lander-semantic--schema-property-geo",
    title: "geo",
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

(SchemaPropertyGeo as typeof SchemaPropertyGeo & { toStructuredData: (props: SchemaPropertyGeoProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
