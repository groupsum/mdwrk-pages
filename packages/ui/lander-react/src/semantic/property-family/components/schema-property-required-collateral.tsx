import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RequiredCollateralPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRequiredCollateralProps extends RequiredCollateralPropertyInput, GeneratedPropertyUiProps<RequiredCollateralPropertyInput> {}

export function SchemaPropertyRequiredCollateral({ value: legacyValue, description = "Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.)", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRequiredCollateralProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RequiredCollateralPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-required-collateral",
    shellClassName: "lander-semantic--schema-property-required-collateral",
    title: "requiredCollateral",
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

(SchemaPropertyRequiredCollateral as typeof SchemaPropertyRequiredCollateral & { toStructuredData: (props: SchemaPropertyRequiredCollateralProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
