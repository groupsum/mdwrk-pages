import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAddressLocalityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAddressLocality({ value, description = "The locality in which the street address is, and which is in the region. For example, Mountain View.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAddressLocalityProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AddressLocalityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-address-locality",
    shellClassName: "lander-semantic--schema-property-address-locality",
    title: "addressLocality",
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
