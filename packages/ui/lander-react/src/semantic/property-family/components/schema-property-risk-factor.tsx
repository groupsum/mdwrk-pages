import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RiskFactorPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRiskFactorProps extends RiskFactorPropertyInput, GeneratedPropertyUiProps<RiskFactorPropertyInput> {}

export function SchemaPropertyRiskFactor({ value: legacyValue, description = "A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age,  coexisting condition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRiskFactorProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RiskFactorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-risk-factor",
    shellClassName: "lander-semantic--schema-property-risk-factor",
    title: "riskFactor",
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
