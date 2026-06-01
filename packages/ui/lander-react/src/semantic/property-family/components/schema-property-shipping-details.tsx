import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyShippingDetailsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyShippingDetails({ value, description = "Indicates information about the shipping policies and options associated with an [[Offer]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyShippingDetailsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ShippingDetailsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-shipping-details",
    shellClassName: "lander-semantic--schema-property-shipping-details",
    title: "shippingDetails",
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
