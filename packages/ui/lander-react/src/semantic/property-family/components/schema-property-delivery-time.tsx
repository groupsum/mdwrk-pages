import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDeliveryTimeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDeliveryTime({ value, description = "The total delay between the receipt of the order and the goods reaching the final customer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDeliveryTimeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DeliveryTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-delivery-time",
    shellClassName: "lander-semantic--schema-property-delivery-time",
    title: "deliveryTime",
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
