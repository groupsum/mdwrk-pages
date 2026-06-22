import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CutoffTimePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCutoffTimeProps extends CutoffTimePropertyInput, GeneratedPropertyUiProps<CutoffTimePropertyInput> {}

export function SchemaPropertyCutoffTime({ value: legacyValue, description = "Order cutoff time allows merchants to describe the time after which they will no longer process orders received on that day. For orders processed after cutoff time, one day gets added to the delivery time estimate. This property is expected to be most typically used via the [[ShippingRateSettings]] publication pattern. The time is indicated using the ISO-8601 Time format, e.g. \"23:30:00-05:00\" would represent 6:30 pm Eastern Standard Time (EST) which is 5 hours behind Coordinated Universal Time (UTC).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCutoffTimeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyCutoffTime as typeof SchemaPropertyCutoffTime & { toStructuredData: (props: SchemaPropertyCutoffTimeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
