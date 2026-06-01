import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SuggestedMaxAgePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySuggestedMaxAgeProps extends SuggestedMaxAgePropertyInput, GeneratedPropertyUiProps<SuggestedMaxAgePropertyInput> {}

export function SchemaPropertySuggestedMaxAge({ value: legacyValue, description = "Maximum recommended age in years for the audience or user.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySuggestedMaxAgeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SuggestedMaxAgePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-suggested-max-age",
    shellClassName: "lander-semantic--schema-property-suggested-max-age",
    title: "suggestedMaxAge",
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
