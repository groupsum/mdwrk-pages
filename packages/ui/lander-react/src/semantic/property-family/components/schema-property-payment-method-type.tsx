import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PaymentMethodTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPaymentMethodTypeProps extends PaymentMethodTypePropertyInput, GeneratedPropertyUiProps<PaymentMethodTypePropertyInput> {}

export function SchemaPropertyPaymentMethodType({ value: legacyValue, description = "The type of a payment method.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPaymentMethodTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyPaymentMethodType as typeof SchemaPropertyPaymentMethodType & { toStructuredData: (props: SchemaPropertyPaymentMethodTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
