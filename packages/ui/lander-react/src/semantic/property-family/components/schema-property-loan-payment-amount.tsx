import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LoanPaymentAmountPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLoanPaymentAmountProps extends LoanPaymentAmountPropertyInput, GeneratedPropertyUiProps<LoanPaymentAmountPropertyInput> {}

export function SchemaPropertyLoanPaymentAmount({ value: legacyValue, description = "The amount of money to pay in a single payment.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLoanPaymentAmountProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LoanPaymentAmountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-loan-payment-amount",
    shellClassName: "lander-semantic--schema-property-loan-payment-amount",
    title: "loanPaymentAmount",
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
