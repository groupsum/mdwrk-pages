import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InterestRatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInterestRateProps extends InterestRatePropertyInput, GeneratedPropertyUiProps<InterestRatePropertyInput> {}

export function SchemaPropertyInterestRate({ value: legacyValue, description = "The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInterestRateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyInterestRate as typeof SchemaPropertyInterestRate & { toStructuredData: (props: SchemaPropertyInterestRateProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
