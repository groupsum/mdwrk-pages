import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ShippingOriginPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyShippingOriginProps extends ShippingOriginPropertyInput, GeneratedPropertyUiProps<ShippingOriginPropertyInput> {}

export function SchemaPropertyShippingOrigin({ value: legacyValue, description = "Indicates the origin of a shipment, i.e. where it should be coming from.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyShippingOriginProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
