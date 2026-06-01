import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCountryOfAssemblyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCountryOfAssembly({ value, description = "The place where the product was assembled.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCountryOfAssemblyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CountryOfAssemblyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-country-of-assembly",
    shellClassName: "lander-semantic--schema-property-country-of-assembly",
    title: "countryOfAssembly",
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
