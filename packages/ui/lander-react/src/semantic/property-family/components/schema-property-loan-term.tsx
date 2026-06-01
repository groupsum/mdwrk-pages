import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLoanTermProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLoanTerm({ value, description = "The duration of the loan or credit agreement.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLoanTermProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LoanTermPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-loan-term",
    shellClassName: "lander-semantic--schema-property-loan-term",
    title: "loanTerm",
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
