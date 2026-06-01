import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SuggestedMeasurementPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySuggestedMeasurementProps extends SuggestedMeasurementPropertyInput, GeneratedPropertyUiProps<SuggestedMeasurementPropertyInput> {}

export function SchemaPropertySuggestedMeasurement({ value: legacyValue, description = "A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySuggestedMeasurementProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SuggestedMeasurementPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-suggested-measurement",
    shellClassName: "lander-semantic--schema-property-suggested-measurement",
    title: "suggestedMeasurement",
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
