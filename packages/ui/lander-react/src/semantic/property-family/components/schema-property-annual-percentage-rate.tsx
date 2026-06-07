import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AnnualPercentageRatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAnnualPercentageRateProps extends AnnualPercentageRatePropertyInput, GeneratedPropertyUiProps<AnnualPercentageRatePropertyInput> {}

export function SchemaPropertyAnnualPercentageRate({ value: legacyValue, description = "The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAnnualPercentageRateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyAnnualPercentageRate as typeof SchemaPropertyAnnualPercentageRate & { toStructuredData: (props: SchemaPropertyAnnualPercentageRateProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
