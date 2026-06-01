import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBillingStartProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBillingStart({ value, description = "Specifies after how much time this price (or price component) becomes valid and billing starts. Can be used, for example, to model a price increase after the first year of a subscription. The unit of measurement is specified by the unitCode property.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBillingStartProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BillingStartPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-billing-start",
    shellClassName: "lander-semantic--schema-property-billing-start",
    title: "billingStart",
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
