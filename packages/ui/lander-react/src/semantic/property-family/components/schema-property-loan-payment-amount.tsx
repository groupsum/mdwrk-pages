import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLoanPaymentAmountProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLoanPaymentAmount({ value, description = "The amount of money to pay in a single payment.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLoanPaymentAmountProps) {
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
