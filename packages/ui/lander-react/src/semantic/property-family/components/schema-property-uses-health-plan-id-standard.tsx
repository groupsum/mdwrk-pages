import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUsesHealthPlanIdStandardProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyUsesHealthPlanIdStandard({ value, description = "The standard for interpreting the Plan ID. The preferred is \"HIOS\". See the Centers for Medicare & Medicaid Services for more details.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyUsesHealthPlanIdStandardProps) {
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
