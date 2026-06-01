import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCountriesNotSupportedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCountriesNotSupported({ value, description = "Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCountriesNotSupportedProps) {
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
