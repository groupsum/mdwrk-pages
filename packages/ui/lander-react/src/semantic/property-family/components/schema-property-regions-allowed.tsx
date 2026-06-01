import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RegionsAllowedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRegionsAllowedProps extends RegionsAllowedPropertyInput, GeneratedPropertyUiProps<RegionsAllowedPropertyInput> {}

export function SchemaPropertyRegionsAllowed({ value: legacyValue, description = "The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in [ISO 3166 format](http://en.wikipedia.org/wiki/ISO_3166).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRegionsAllowedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RegionsAllowedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-regions-allowed",
    shellClassName: "lander-semantic--schema-property-regions-allowed",
    title: "regionsAllowed",
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
