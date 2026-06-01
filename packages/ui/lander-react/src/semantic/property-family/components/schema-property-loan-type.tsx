import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLoanTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLoanType({ value, description = "The type of a loan or credit.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLoanTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LoanTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-loan-type",
    shellClassName: "lander-semantic--schema-property-loan-type",
    title: "loanType",
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
