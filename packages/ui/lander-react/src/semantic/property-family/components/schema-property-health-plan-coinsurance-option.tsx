import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HealthPlanCoinsuranceOptionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanCoinsuranceOptionProps extends HealthPlanCoinsuranceOptionPropertyInput, GeneratedPropertyUiProps<HealthPlanCoinsuranceOptionPropertyInput> {}

export function SchemaPropertyHealthPlanCoinsuranceOption({ value: legacyValue, description = "Whether the coinsurance applies before or after deductible, etc. TODO: Is this a closed set?", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHealthPlanCoinsuranceOptionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanCoinsuranceOptionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-coinsurance-option",
    shellClassName: "lander-semantic--schema-property-health-plan-coinsurance-option",
    title: "healthPlanCoinsuranceOption",
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

(SchemaPropertyHealthPlanCoinsuranceOption as typeof SchemaPropertyHealthPlanCoinsuranceOption & { toStructuredData: (props: SchemaPropertyHealthPlanCoinsuranceOptionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
