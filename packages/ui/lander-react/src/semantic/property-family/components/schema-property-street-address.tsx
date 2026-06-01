import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStreetAddressProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyStreetAddress({ value, description = "The street address. For example, 1600 Amphitheatre Pkwy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyStreetAddressProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StreetAddressPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-street-address",
    shellClassName: "lander-semantic--schema-property-street-address",
    title: "streetAddress",
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
