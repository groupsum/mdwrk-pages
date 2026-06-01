import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AcceptedPaymentMethodPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAcceptedPaymentMethodProps extends AcceptedPaymentMethodPropertyInput, GeneratedPropertyUiProps<AcceptedPaymentMethodPropertyInput> {}

export function SchemaPropertyAcceptedPaymentMethod({ value: legacyValue, description = "The payment method(s) that are accepted in general by an organization, or for some specific demand or offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAcceptedPaymentMethodProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AcceptedPaymentMethodPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-accepted-payment-method",
    shellClassName: "lander-semantic--schema-property-accepted-payment-method",
    title: "acceptedPaymentMethod",
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
