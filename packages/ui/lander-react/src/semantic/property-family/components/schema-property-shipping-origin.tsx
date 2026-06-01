import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyShippingOriginProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyShippingOrigin({ value, description = "Indicates the origin of a shipment, i.e. where it should be coming from.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyShippingOriginProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ShippingOriginPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-shipping-origin",
    shellClassName: "lander-semantic--schema-property-shipping-origin",
    title: "shippingOrigin",
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
