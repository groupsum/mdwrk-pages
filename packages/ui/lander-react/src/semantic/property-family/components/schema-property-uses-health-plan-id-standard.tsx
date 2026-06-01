import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { UsesHealthPlanIdStandardPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUsesHealthPlanIdStandardProps extends UsesHealthPlanIdStandardPropertyInput, GeneratedPropertyUiProps<UsesHealthPlanIdStandardPropertyInput> {}

export function SchemaPropertyUsesHealthPlanIdStandard({ value: legacyValue, description = "The standard for interpreting the Plan ID. The preferred is \"HIOS\". See the Centers for Medicare & Medicaid Services for more details.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyUsesHealthPlanIdStandardProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UsesHealthPlanIdStandardPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-uses-health-plan-id-standard",
    shellClassName: "lander-semantic--schema-property-uses-health-plan-id-standard",
    title: "usesHealthPlanIdStandard",
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
