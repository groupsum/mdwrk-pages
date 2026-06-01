import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPaymentMethodTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPaymentMethodType({ value, description = "The type of a payment method.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPaymentMethodTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PaymentMethodTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-payment-method-type",
    shellClassName: "lander-semantic--schema-property-payment-method-type",
    title: "paymentMethodType",
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
