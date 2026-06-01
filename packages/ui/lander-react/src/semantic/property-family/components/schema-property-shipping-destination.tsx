import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyShippingDestinationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyShippingDestination({ value, description = "indicates (possibly multiple) shipping destinations. These can be defined in several ways, e.g. postalCode ranges.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyShippingDestinationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ShippingDestinationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-shipping-destination",
    shellClassName: "lander-semantic--schema-property-shipping-destination",
    title: "shippingDestination",
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
