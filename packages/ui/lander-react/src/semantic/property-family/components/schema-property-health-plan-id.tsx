import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanIdProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHealthPlanId({ value, description = "The 14-character, HIOS-generated Plan ID number. (Plan IDs must be unique, even across different markets.)", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHealthPlanIdProps) {
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
