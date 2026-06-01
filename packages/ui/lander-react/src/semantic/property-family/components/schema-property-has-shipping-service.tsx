import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasShippingServiceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasShippingService({ value, description = "Specification of a shipping service offered by the organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasShippingServiceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasShippingServicePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-shipping-service",
    shellClassName: "lander-semantic--schema-property-has-shipping-service",
    title: "hasShippingService",
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
