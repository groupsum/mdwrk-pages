import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BenefitsSummaryUrlPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBenefitsSummaryUrlProps extends BenefitsSummaryUrlPropertyInput, GeneratedPropertyUiProps<BenefitsSummaryUrlPropertyInput> {}

export function SchemaPropertyBenefitsSummaryUrl({ value: legacyValue, description = "The URL that goes directly to the summary of benefits and coverage for the specific standard plan or plan variation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBenefitsSummaryUrlProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyBenefitsSummaryUrl as typeof SchemaPropertyBenefitsSummaryUrl & { toStructuredData: (props: SchemaPropertyBenefitsSummaryUrlProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
