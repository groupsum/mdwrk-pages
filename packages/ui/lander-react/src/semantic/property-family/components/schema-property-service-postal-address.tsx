import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServicePostalAddressProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyServicePostalAddress({ value, description = "The address for accessing the service by mail.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyServicePostalAddressProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ServicePostalAddressPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-service-postal-address",
    shellClassName: "lander-semantic--schema-property-service-postal-address",
    title: "servicePostalAddress",
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
