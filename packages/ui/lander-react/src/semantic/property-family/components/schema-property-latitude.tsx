import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LatitudePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLatitudeProps extends LatitudePropertyInput, GeneratedPropertyUiProps<LatitudePropertyInput> {}

export function SchemaPropertyLatitude({ value: legacyValue, description = "The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLatitudeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LatitudePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-latitude",
    shellClassName: "lander-semantic--schema-property-latitude",
    title: "latitude",
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
