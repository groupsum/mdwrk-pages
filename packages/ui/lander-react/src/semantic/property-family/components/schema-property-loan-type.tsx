import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LoanTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLoanTypeProps extends LoanTypePropertyInput, GeneratedPropertyUiProps<LoanTypePropertyInput> {}

export function SchemaPropertyLoanType({ value: legacyValue, description = "The type of a loan or credit.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLoanTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
