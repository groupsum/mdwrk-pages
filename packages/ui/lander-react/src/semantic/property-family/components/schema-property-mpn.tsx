import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMpnProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMpn({ value, description = "The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMpnProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MpnPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-mpn",
    shellClassName: "lander-semantic--schema-property-mpn",
    title: "mpn",
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
