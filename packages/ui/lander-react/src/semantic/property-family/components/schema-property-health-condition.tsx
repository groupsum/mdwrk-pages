import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HealthConditionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthConditionProps extends HealthConditionPropertyInput, GeneratedPropertyUiProps<HealthConditionPropertyInput> {}

export function SchemaPropertyHealthCondition({ value: legacyValue, description = "Specifying the health condition(s) of a patient, medical study, or other target audience.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHealthConditionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthConditionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-condition",
    shellClassName: "lander-semantic--schema-property-health-condition",
    title: "healthCondition",
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
