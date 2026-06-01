import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CountryOfLastProcessingPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCountryOfLastProcessingProps extends CountryOfLastProcessingPropertyInput, GeneratedPropertyUiProps<CountryOfLastProcessingPropertyInput> {}

export function SchemaPropertyCountryOfLastProcessing({ value: legacyValue, description = "The place where the item (typically [[Product]]) was last processed and tested before importation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCountryOfLastProcessingProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CountryOfLastProcessingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-country-of-last-processing",
    shellClassName: "lander-semantic--schema-property-country-of-last-processing",
    title: "countryOfLastProcessing",
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
