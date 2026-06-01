import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HealthPlanCopayOptionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanCopayOptionProps extends HealthPlanCopayOptionPropertyInput, GeneratedPropertyUiProps<HealthPlanCopayOptionPropertyInput> {}

export function SchemaPropertyHealthPlanCopayOption({ value: legacyValue, description = "Whether the copay is before or after deductible, etc. TODO: Is this a closed set?", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHealthPlanCopayOptionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanCopayOptionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-copay-option",
    shellClassName: "lander-semantic--schema-property-health-plan-copay-option",
    title: "healthPlanCopayOption",
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
