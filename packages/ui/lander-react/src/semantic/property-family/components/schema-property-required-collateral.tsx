import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRequiredCollateralProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRequiredCollateral({ value, description = "Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.)", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRequiredCollateralProps) {
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
