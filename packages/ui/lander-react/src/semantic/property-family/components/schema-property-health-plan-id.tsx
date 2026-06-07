import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HealthPlanIdPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanIdProps extends HealthPlanIdPropertyInput, GeneratedPropertyUiProps<HealthPlanIdPropertyInput> {}

export function SchemaPropertyHealthPlanId({ value: legacyValue, description = "The 14-character, HIOS-generated Plan ID number. (Plan IDs must be unique, even across different markets.)", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHealthPlanIdProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanIdPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-id",
    shellClassName: "lander-semantic--schema-property-health-plan-id",
    title: "healthPlanId",
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

(SchemaPropertyHealthPlanId as typeof SchemaPropertyHealthPlanId & { toStructuredData: (props: SchemaPropertyHealthPlanIdProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
