import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ShippingDetailsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyShippingDetailsProps extends ShippingDetailsPropertyInput, GeneratedPropertyUiProps<ShippingDetailsPropertyInput> {}

export function SchemaPropertyShippingDetails({ value: legacyValue, description = "Indicates information about the shipping policies and options associated with an [[Offer]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyShippingDetailsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
