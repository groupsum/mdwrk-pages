import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SpatialPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySpatialProps extends SpatialPropertyInput, GeneratedPropertyUiProps<SpatialPropertyInput> {}

export function SchemaPropertySpatial({ value: legacyValue, description = "The \"spatial\" property can be used in cases when more specific properties\n(e.g. [[locationCreated]], [[spatialCoverage]], [[contentLocation]]) are not known to be appropriate.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySpatialProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SpatialPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-spatial",
    shellClassName: "lander-semantic--schema-property-spatial",
    title: "spatial",
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
