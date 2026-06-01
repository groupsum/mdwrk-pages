import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyShippingRateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyShippingRate({ value, description = "The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the [[MonetaryAmount]]) are most appropriate.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyShippingRateProps) {
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
