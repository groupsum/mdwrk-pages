import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanNetworkTierProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHealthPlanNetworkTier({ value, description = "The tier(s) for this network.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHealthPlanNetworkTierProps) {
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
