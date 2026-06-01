import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ShippingRatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyShippingRateProps extends ShippingRatePropertyInput, GeneratedPropertyUiProps<ShippingRatePropertyInput> {}

export function SchemaPropertyShippingRate({ value: legacyValue, description = "The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the [[MonetaryAmount]]) are most appropriate.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyShippingRateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ShippingRatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-shipping-rate",
    shellClassName: "lander-semantic--schema-property-shipping-rate",
    title: "shippingRate",
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
