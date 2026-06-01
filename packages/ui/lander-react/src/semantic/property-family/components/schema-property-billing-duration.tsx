import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBillingDurationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBillingDuration({ value, description = "Specifies for how long this price (or price component) will be billed. Can be used, for example, to model the contractual duration of a subscription or payment plan. Type can be either a Duration or a Number (in which case the unit of measurement, for example month, is specified by the unitCode property).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBillingDurationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BillingDurationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-billing-duration",
    shellClassName: "lander-semantic--schema-property-billing-duration",
    title: "billingDuration",
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
