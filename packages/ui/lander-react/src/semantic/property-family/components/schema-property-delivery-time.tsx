import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DeliveryTimePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDeliveryTimeProps extends DeliveryTimePropertyInput, GeneratedPropertyUiProps<DeliveryTimePropertyInput> {}

export function SchemaPropertyDeliveryTime({ value: legacyValue, description = "The total delay between the receipt of the order and the goods reaching the final customer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDeliveryTimeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
