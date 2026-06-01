import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ShippingConditionsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyShippingConditionsProps extends ShippingConditionsPropertyInput, GeneratedPropertyUiProps<ShippingConditionsPropertyInput> {}

export function SchemaPropertyShippingConditions({ value: legacyValue, description = "The conditions (constraints, price) applicable to the [[ShippingService]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyShippingConditionsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ShippingConditionsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-shipping-conditions",
    shellClassName: "lander-semantic--schema-property-shipping-conditions",
    title: "shippingConditions",
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
