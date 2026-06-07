import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ShippingDestinationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyShippingDestinationProps extends ShippingDestinationPropertyInput, GeneratedPropertyUiProps<ShippingDestinationPropertyInput> {}

export function SchemaPropertyShippingDestination({ value: legacyValue, description = "indicates (possibly multiple) shipping destinations. These can be defined in several ways, e.g. postalCode ranges.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyShippingDestinationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyShippingDestination as typeof SchemaPropertyShippingDestination & { toStructuredData: (props: SchemaPropertyShippingDestinationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
