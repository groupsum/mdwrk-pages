import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ApplicableCountryPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyApplicableCountryProps extends ApplicableCountryPropertyInput, GeneratedPropertyUiProps<ApplicableCountryPropertyInput> {}

export function SchemaPropertyApplicableCountry({ value: legacyValue, description = "A country where a particular merchant return policy applies to, for example the two-letter ISO 3166-1 alpha-2 country code.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyApplicableCountryProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ApplicableCountryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-applicable-country",
    shellClassName: "lander-semantic--schema-property-applicable-country",
    title: "applicableCountry",
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
