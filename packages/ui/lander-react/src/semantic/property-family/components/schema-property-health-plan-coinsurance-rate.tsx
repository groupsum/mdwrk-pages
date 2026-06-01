import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HealthPlanCoinsuranceRatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanCoinsuranceRateProps extends HealthPlanCoinsuranceRatePropertyInput, GeneratedPropertyUiProps<HealthPlanCoinsuranceRatePropertyInput> {}

export function SchemaPropertyHealthPlanCoinsuranceRate({ value: legacyValue, description = "The rate of coinsurance expressed as a number between 0.0 and 1.0.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHealthPlanCoinsuranceRateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
