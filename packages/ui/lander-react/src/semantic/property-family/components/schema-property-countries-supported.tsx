import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CountriesSupportedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCountriesSupportedProps extends CountriesSupportedPropertyInput, GeneratedPropertyUiProps<CountriesSupportedPropertyInput> {}

export function SchemaPropertyCountriesSupported({ value: legacyValue, description = "Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCountriesSupportedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CountriesSupportedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-countries-supported",
    shellClassName: "lander-semantic--schema-property-countries-supported",
    title: "countriesSupported",
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
