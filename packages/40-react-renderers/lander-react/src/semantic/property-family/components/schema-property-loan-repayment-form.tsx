import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LoanRepaymentFormPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLoanRepaymentFormProps extends LoanRepaymentFormPropertyInput, GeneratedPropertyUiProps<LoanRepaymentFormPropertyInput> {}

export function SchemaPropertyLoanRepaymentForm({ value: legacyValue, description = "A form of paying back money previously borrowed from a lender. Repayment usually takes the form of periodic payments that normally include part principal plus interest in each payment.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLoanRepaymentFormProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LoanRepaymentFormPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-loan-repayment-form",
    shellClassName: "lander-semantic--schema-property-loan-repayment-form",
    title: "loanRepaymentForm",
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

(SchemaPropertyLoanRepaymentForm as typeof SchemaPropertyLoanRepaymentForm & { toStructuredData: (props: SchemaPropertyLoanRepaymentFormProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
