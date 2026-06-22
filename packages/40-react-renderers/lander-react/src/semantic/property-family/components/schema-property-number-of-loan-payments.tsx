import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NumberOfLoanPaymentsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNumberOfLoanPaymentsProps extends NumberOfLoanPaymentsPropertyInput, GeneratedPropertyUiProps<NumberOfLoanPaymentsPropertyInput> {}

export function SchemaPropertyNumberOfLoanPayments({ value: legacyValue, description = "The number of payments contractually required at origination to repay the loan. For monthly paying loans this is the number of months from the contractual first payment date to the maturity date.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNumberOfLoanPaymentsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NumberOfLoanPaymentsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-number-of-loan-payments",
    shellClassName: "lander-semantic--schema-property-number-of-loan-payments",
    title: "numberOfLoanPayments",
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

(SchemaPropertyNumberOfLoanPayments as typeof SchemaPropertyNumberOfLoanPayments & { toStructuredData: (props: SchemaPropertyNumberOfLoanPaymentsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
