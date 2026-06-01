import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBenefitsSummaryUrlProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBenefitsSummaryUrl({ value, description = "The URL that goes directly to the summary of benefits and coverage for the specific standard plan or plan variation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBenefitsSummaryUrlProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BenefitsSummaryUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-benefits-summary-url",
    shellClassName: "lander-semantic--schema-property-benefits-summary-url",
    title: "benefitsSummaryUrl",
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
