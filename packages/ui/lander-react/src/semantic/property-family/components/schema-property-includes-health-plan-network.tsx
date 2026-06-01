import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IncludesHealthPlanNetworkPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIncludesHealthPlanNetworkProps extends IncludesHealthPlanNetworkPropertyInput, GeneratedPropertyUiProps<IncludesHealthPlanNetworkPropertyInput> {}

export function SchemaPropertyIncludesHealthPlanNetwork({ value: legacyValue, description = "Networks covered by this plan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIncludesHealthPlanNetworkProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
