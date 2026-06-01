import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMonthlyMinimumRepaymentAmountProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMonthlyMinimumRepaymentAmount({ value, description = "The minimum payment is the lowest amount of money that one is required to pay on a credit card statement each month.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMonthlyMinimumRepaymentAmountProps) {
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
