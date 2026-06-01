import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInterestRateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInterestRate({ value, description = "The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInterestRateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InterestRatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-interest-rate",
    shellClassName: "lander-semantic--schema-property-interest-rate",
    title: "interestRate",
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
