import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLoanPaymentFrequencyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLoanPaymentFrequency({ value, description = "Frequency of payments due, i.e. number of months between payments. This is defined as a frequency, i.e. the reciprocal of a period of time.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLoanPaymentFrequencyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LoanPaymentFrequencyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-loan-payment-frequency",
    shellClassName: "lander-semantic--schema-property-loan-payment-frequency",
    title: "loanPaymentFrequency",
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
