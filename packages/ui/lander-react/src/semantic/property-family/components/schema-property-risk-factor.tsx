import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRiskFactorProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRiskFactor({ value, description = "A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age,  coexisting condition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRiskFactorProps) {
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
