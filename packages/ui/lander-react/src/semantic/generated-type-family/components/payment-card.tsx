import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PaymentCardInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, renderGeneratedTypeCard } from "../shared.js";

export interface PaymentCardProps extends PaymentCardInput, GeneratedTypeUiProps<PaymentCardInput> {}

export function PaymentCard({ value: legacyValue, description = "A payment method using a credit, debit, store or other card to associate the payment with an account.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: PaymentCardProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.PaymentCardStructuredData,
    defaultEyebrow: "Type",
    kind: "payment-card",
    shellClassName: "lander-semantic--payment-card",
    title: "PaymentCard",
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
