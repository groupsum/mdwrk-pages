import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBillingIncrementProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBillingIncrement({ value, description = "This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBillingIncrementProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BillingIncrementPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-billing-increment",
    shellClassName: "lander-semantic--schema-property-billing-increment",
    title: "billingIncrement",
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
