import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanCoinsuranceRateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHealthPlanCoinsuranceRate({ value, description = "The rate of coinsurance expressed as a number between 0.0 and 1.0.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHealthPlanCoinsuranceRateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanCoinsuranceRatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-coinsurance-rate",
    shellClassName: "lander-semantic--schema-property-health-plan-coinsurance-rate",
    title: "healthPlanCoinsuranceRate",
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
