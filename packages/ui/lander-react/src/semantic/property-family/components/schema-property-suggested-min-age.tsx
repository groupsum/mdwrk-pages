import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SuggestedMinAgePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySuggestedMinAgeProps extends SuggestedMinAgePropertyInput, GeneratedPropertyUiProps<SuggestedMinAgePropertyInput> {}

export function SchemaPropertySuggestedMinAge({ value: legacyValue, description = "Minimum recommended age in years for the audience or user.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySuggestedMinAgeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SuggestedMinAgePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-suggested-min-age",
    shellClassName: "lander-semantic--schema-property-suggested-min-age",
    title: "suggestedMinAge",
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
