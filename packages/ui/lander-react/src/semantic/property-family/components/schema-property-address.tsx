import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAddressProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAddress({ value, description = "Physical address of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAddressProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AddressPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-address",
    shellClassName: "lander-semantic--schema-property-address",
    title: "address",
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
