import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyShippingConditionsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyShippingConditions({ value, description = "The conditions (constraints, price) applicable to the [[ShippingService]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyShippingConditionsProps) {
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
