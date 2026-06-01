import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReturnShippingFeesAmountProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReturnShippingFeesAmount({ value, description = "Amount of shipping costs for product returns (for any reason). Applicable when property [[returnFees]] equals [[ReturnShippingFees]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReturnShippingFeesAmountProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReturnShippingFeesAmountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-return-shipping-fees-amount",
    shellClassName: "lander-semantic--schema-property-return-shipping-fees-amount",
    title: "returnShippingFeesAmount",
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
