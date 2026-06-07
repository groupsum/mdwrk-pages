import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LoanPaymentFrequencyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLoanPaymentFrequencyProps extends LoanPaymentFrequencyPropertyInput, GeneratedPropertyUiProps<LoanPaymentFrequencyPropertyInput> {}

export function SchemaPropertyLoanPaymentFrequency({ value: legacyValue, description = "Frequency of payments due, i.e. number of months between payments. This is defined as a frequency, i.e. the reciprocal of a period of time.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLoanPaymentFrequencyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyLoanPaymentFrequency as typeof SchemaPropertyLoanPaymentFrequency & { toStructuredData: (props: SchemaPropertyLoanPaymentFrequencyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
