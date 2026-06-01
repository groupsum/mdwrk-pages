import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExtendedAddressProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyExtendedAddress({ value, description = "An address extension such as an apartment number, C/O or alternative name.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyExtendedAddressProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ExtendedAddressPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-extended-address",
    shellClassName: "lander-semantic--schema-property-extended-address",
    title: "extendedAddress",
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
