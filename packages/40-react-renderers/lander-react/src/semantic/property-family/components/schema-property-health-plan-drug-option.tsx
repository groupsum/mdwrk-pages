import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HealthPlanDrugOptionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanDrugOptionProps extends HealthPlanDrugOptionPropertyInput, GeneratedPropertyUiProps<HealthPlanDrugOptionPropertyInput> {}

export function SchemaPropertyHealthPlanDrugOption({ value: legacyValue, description = "TODO.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHealthPlanDrugOptionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanDrugOptionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-drug-option",
    shellClassName: "lander-semantic--schema-property-health-plan-drug-option",
    title: "healthPlanDrugOption",
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

(SchemaPropertyHealthPlanDrugOption as typeof SchemaPropertyHealthPlanDrugOption & { toStructuredData: (props: SchemaPropertyHealthPlanDrugOptionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
