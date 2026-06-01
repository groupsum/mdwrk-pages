import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DeliveryLeadTimePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDeliveryLeadTimeProps extends DeliveryLeadTimePropertyInput, GeneratedPropertyUiProps<DeliveryLeadTimePropertyInput> {}

export function SchemaPropertyDeliveryLeadTime({ value: legacyValue, description = "The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDeliveryLeadTimeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
