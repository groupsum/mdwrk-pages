import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TypicalAgeRangePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTypicalAgeRangeProps extends TypicalAgeRangePropertyInput, GeneratedPropertyUiProps<TypicalAgeRangePropertyInput> {}

export function SchemaPropertyTypicalAgeRange({ value: legacyValue, description = "The typical expected age range, e.g. '7-9', '11-'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTypicalAgeRangeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TypicalAgeRangePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-typical-age-range",
    shellClassName: "lander-semantic--schema-property-typical-age-range",
    title: "typicalAgeRange",
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
