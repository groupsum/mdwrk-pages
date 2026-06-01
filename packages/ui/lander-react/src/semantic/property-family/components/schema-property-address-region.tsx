import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAddressRegionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAddressRegion({ value, description = "The region in which the locality is, and which is in the country. For example, California or another appropriate first-level [Administrative division](https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country) such as the Province in Italy or Region in Germany.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAddressRegionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AddressRegionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-address-region",
    shellClassName: "lander-semantic--schema-property-address-region",
    title: "addressRegion",
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
