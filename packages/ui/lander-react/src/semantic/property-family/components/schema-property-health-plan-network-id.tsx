import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanNetworkIdProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHealthPlanNetworkId({ value, description = "Name or unique ID of network. (Networks are often reused across different insurance plans.)", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHealthPlanNetworkIdProps) {
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
