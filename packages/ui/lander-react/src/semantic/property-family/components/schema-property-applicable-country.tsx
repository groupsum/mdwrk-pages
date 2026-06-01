import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyApplicableCountryProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyApplicableCountry({ value, description = "A country where a particular merchant return policy applies to, for example the two-letter ISO 3166-1 alpha-2 country code.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyApplicableCountryProps) {
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
