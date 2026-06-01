import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HealthPlanNetworkIdPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanNetworkIdProps extends HealthPlanNetworkIdPropertyInput, GeneratedPropertyUiProps<HealthPlanNetworkIdPropertyInput> {}

export function SchemaPropertyHealthPlanNetworkId({ value: legacyValue, description = "Name or unique ID of network. (Networks are often reused across different insurance plans.)", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHealthPlanNetworkIdProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanNetworkIdPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-network-id",
    shellClassName: "lander-semantic--schema-property-health-plan-network-id",
    title: "healthPlanNetworkId",
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
