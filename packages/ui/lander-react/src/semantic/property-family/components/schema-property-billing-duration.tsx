import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BillingDurationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBillingDurationProps extends BillingDurationPropertyInput, GeneratedPropertyUiProps<BillingDurationPropertyInput> {}

export function SchemaPropertyBillingDuration({ value: legacyValue, description = "Specifies for how long this price (or price component) will be billed. Can be used, for example, to model the contractual duration of a subscription or payment plan. Type can be either a Duration or a Number (in which case the unit of measurement, for example month, is specified by the unitCode property).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBillingDurationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyBillingDuration as typeof SchemaPropertyBillingDuration & { toStructuredData: (props: SchemaPropertyBillingDurationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
