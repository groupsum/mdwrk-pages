import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CountriesNotSupportedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCountriesNotSupportedProps extends CountriesNotSupportedPropertyInput, GeneratedPropertyUiProps<CountriesNotSupportedPropertyInput> {}

export function SchemaPropertyCountriesNotSupported({ value: legacyValue, description = "Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCountriesNotSupportedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CountriesNotSupportedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-countries-not-supported",
    shellClassName: "lander-semantic--schema-property-countries-not-supported",
    title: "countriesNotSupported",
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

(SchemaPropertyCountriesNotSupported as typeof SchemaPropertyCountriesNotSupported & { toStructuredData: (props: SchemaPropertyCountriesNotSupportedProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
