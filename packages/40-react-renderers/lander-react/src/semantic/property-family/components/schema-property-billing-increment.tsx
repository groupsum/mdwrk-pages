import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BillingIncrementPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBillingIncrementProps extends BillingIncrementPropertyInput, GeneratedPropertyUiProps<BillingIncrementPropertyInput> {}

export function SchemaPropertyBillingIncrement({ value: legacyValue, description = "This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBillingIncrementProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyBillingIncrement as typeof SchemaPropertyBillingIncrement & { toStructuredData: (props: SchemaPropertyBillingIncrementProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
