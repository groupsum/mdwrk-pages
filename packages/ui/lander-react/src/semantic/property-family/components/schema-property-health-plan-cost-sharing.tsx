import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HealthPlanCostSharingPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanCostSharingProps extends HealthPlanCostSharingPropertyInput, GeneratedPropertyUiProps<HealthPlanCostSharingPropertyInput> {}

export function SchemaPropertyHealthPlanCostSharing({ value: legacyValue, description = "The costs to the patient for services under this network or formulary.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHealthPlanCostSharingProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanCostSharingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-cost-sharing",
    shellClassName: "lander-semantic--schema-property-health-plan-cost-sharing",
    title: "healthPlanCostSharing",
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
