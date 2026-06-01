import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCountryOfLastProcessingProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCountryOfLastProcessing({ value, description = "The place where the item (typically [[Product]]) was last processed and tested before importation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCountryOfLastProcessingProps) {
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
