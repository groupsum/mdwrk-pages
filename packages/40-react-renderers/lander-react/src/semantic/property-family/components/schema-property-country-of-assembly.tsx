import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CountryOfAssemblyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCountryOfAssemblyProps extends CountryOfAssemblyPropertyInput, GeneratedPropertyUiProps<CountryOfAssemblyPropertyInput> {}

export function SchemaPropertyCountryOfAssembly({ value: legacyValue, description = "The place where the product was assembled.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCountryOfAssemblyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyCountryOfAssembly as typeof SchemaPropertyCountryOfAssembly & { toStructuredData: (props: SchemaPropertyCountryOfAssemblyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
