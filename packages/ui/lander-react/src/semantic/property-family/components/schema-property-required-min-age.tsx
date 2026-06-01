import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RequiredMinAgePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRequiredMinAgeProps extends RequiredMinAgePropertyInput, GeneratedPropertyUiProps<RequiredMinAgePropertyInput> {}

export function SchemaPropertyRequiredMinAge({ value: legacyValue, description = "Audiences defined by a person's minimum age.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRequiredMinAgeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RequiredMinAgePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-required-min-age",
    shellClassName: "lander-semantic--schema-property-required-min-age",
    title: "requiredMinAge",
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
