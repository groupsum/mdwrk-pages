import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HealthPlanNetworkTierPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanNetworkTierProps extends HealthPlanNetworkTierPropertyInput, GeneratedPropertyUiProps<HealthPlanNetworkTierPropertyInput> {}

export function SchemaPropertyHealthPlanNetworkTier({ value: legacyValue, description = "The tier(s) for this network.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHealthPlanNetworkTierProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanNetworkTierPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-network-tier",
    shellClassName: "lander-semantic--schema-property-health-plan-network-tier",
    title: "healthPlanNetworkTier",
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
