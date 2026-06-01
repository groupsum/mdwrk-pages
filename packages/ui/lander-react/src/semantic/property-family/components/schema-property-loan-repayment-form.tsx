import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLoanRepaymentFormProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLoanRepaymentForm({ value, description = "A form of paying back money previously borrowed from a lender. Repayment usually takes the form of periodic payments that normally include part principal plus interest in each payment.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLoanRepaymentFormProps) {
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
