import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LoanTermPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLoanTermProps extends LoanTermPropertyInput, GeneratedPropertyUiProps<LoanTermPropertyInput> {}

export function SchemaPropertyLoanTerm({ value: legacyValue, description = "The duration of the loan or credit agreement.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLoanTermProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyLoanTerm as typeof SchemaPropertyLoanTerm & { toStructuredData: (props: SchemaPropertyLoanTermProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
