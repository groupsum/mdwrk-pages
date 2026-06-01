import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDeliveryLeadTimeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDeliveryLeadTime({ value, description = "The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDeliveryLeadTimeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DeliveryLeadTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-delivery-lead-time",
    shellClassName: "lander-semantic--schema-property-delivery-lead-time",
    title: "deliveryLeadTime",
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
