import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRestockingFeeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRestockingFee({ value, description = "Use [[MonetaryAmount]] to specify a fixed restocking fee for product returns, or use [[Number]] to specify a percentage of the product price paid by the customer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRestockingFeeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RestockingFeePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-restocking-fee",
    shellClassName: "lander-semantic--schema-property-restocking-fee",
    title: "restockingFee",
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
