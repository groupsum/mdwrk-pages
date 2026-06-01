import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCountriesSupportedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCountriesSupported({ value, description = "Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCountriesSupportedProps) {
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
