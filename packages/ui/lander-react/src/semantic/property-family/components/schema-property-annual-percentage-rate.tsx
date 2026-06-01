import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAnnualPercentageRateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAnnualPercentageRate({ value, description = "The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAnnualPercentageRateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AnnualPercentageRatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-annual-percentage-rate",
    shellClassName: "lander-semantic--schema-property-annual-percentage-rate",
    title: "annualPercentageRate",
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
