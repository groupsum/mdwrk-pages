import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAddressCountryProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAddressCountry({ value, description = "The country. Recommended to be in 2-letter [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1) format, for example \"US\". For backward compatibility, a 3-letter [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) country code such as \"SGP\" or a full country name such as \"Singapore\" can also be used.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAddressCountryProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AddressCountryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-address-country",
    shellClassName: "lander-semantic--schema-property-address-country",
    title: "addressCountry",
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
