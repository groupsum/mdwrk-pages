import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReturnPolicyCountryPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReturnPolicyCountryProps extends ReturnPolicyCountryPropertyInput, GeneratedPropertyUiProps<ReturnPolicyCountryPropertyInput> {}

export function SchemaPropertyReturnPolicyCountry({ value: legacyValue, description = "The country where the product has to be sent to for returns, for example \"Ireland\" using the [[name]] property of [[Country]]. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1). Note that this can be different from the country where the product was originally shipped from or sent to.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReturnPolicyCountryProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReturnPolicyCountryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-return-policy-country",
    shellClassName: "lander-semantic--schema-property-return-policy-country",
    title: "returnPolicyCountry",
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

(SchemaPropertyReturnPolicyCountry as typeof SchemaPropertyReturnPolicyCountry & { toStructuredData: (props: SchemaPropertyReturnPolicyCountryProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
