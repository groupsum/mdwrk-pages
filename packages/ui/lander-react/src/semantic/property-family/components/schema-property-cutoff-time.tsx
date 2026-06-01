import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCutoffTimeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCutoffTime({ value, description = "Order cutoff time allows merchants to describe the time after which they will no longer process orders received on that day. For orders processed after cutoff time, one day gets added to the delivery time estimate. This property is expected to be most typically used via the [[ShippingRateSettings]] publication pattern. The time is indicated using the ISO-8601 Time format, e.g. \"23:30:00-05:00\" would represent 6:30 pm Eastern Standard Time (EST) which is 5 hours behind Coordinated Universal Time (UTC).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCutoffTimeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CutoffTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-cutoff-time",
    shellClassName: "lander-semantic--schema-property-cutoff-time",
    title: "cutoffTime",
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
