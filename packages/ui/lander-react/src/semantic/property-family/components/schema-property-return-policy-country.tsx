import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReturnPolicyCountryProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReturnPolicyCountry({ value, description = "The country where the product has to be sent to for returns, for example \"Ireland\" using the [[name]] property of [[Country]]. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1). Note that this can be different from the country where the product was originally shipped from or sent to.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReturnPolicyCountryProps) {
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
