import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIncludesHealthPlanNetworkProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIncludesHealthPlanNetwork({ value, description = "Networks covered by this plan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIncludesHealthPlanNetworkProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IncludesHealthPlanNetworkPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-includes-health-plan-network",
    shellClassName: "lander-semantic--schema-property-includes-health-plan-network",
    title: "includesHealthPlanNetwork",
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
