import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemDefectReturnShippingFeesAmountProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyItemDefectReturnShippingFeesAmount({ value, description = "Amount of shipping costs for defect product returns. Applicable when property [[itemDefectReturnFees]] equals [[ReturnShippingFees]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyItemDefectReturnShippingFeesAmountProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ItemDefectReturnShippingFeesAmountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-item-defect-return-shipping-fees-amount",
    shellClassName: "lander-semantic--schema-property-item-defect-return-shipping-fees-amount",
    title: "itemDefectReturnShippingFeesAmount",
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
