import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MonthlyMinimumRepaymentAmountPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMonthlyMinimumRepaymentAmountProps extends MonthlyMinimumRepaymentAmountPropertyInput, GeneratedPropertyUiProps<MonthlyMinimumRepaymentAmountPropertyInput> {}

export function SchemaPropertyMonthlyMinimumRepaymentAmount({ value: legacyValue, description = "The minimum payment is the lowest amount of money that one is required to pay on a credit card statement each month.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMonthlyMinimumRepaymentAmountProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MonthlyMinimumRepaymentAmountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-monthly-minimum-repayment-amount",
    shellClassName: "lander-semantic--schema-property-monthly-minimum-repayment-amount",
    title: "monthlyMinimumRepaymentAmount",
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

(SchemaPropertyMonthlyMinimumRepaymentAmount as typeof SchemaPropertyMonthlyMinimumRepaymentAmount & { toStructuredData: (props: SchemaPropertyMonthlyMinimumRepaymentAmountProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
