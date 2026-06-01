import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAcceptedPaymentMethodProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAcceptedPaymentMethod({ value, description = "The payment method(s) that are accepted in general by an organization, or for some specific demand or offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAcceptedPaymentMethodProps) {
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
