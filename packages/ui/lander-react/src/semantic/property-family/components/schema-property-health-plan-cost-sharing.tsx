import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanCostSharingProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHealthPlanCostSharing({ value, description = "The costs to the patient for services under this network or formulary.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHealthPlanCostSharingProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanCostSharingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-cost-sharing",
    shellClassName: "lander-semantic--schema-property-health-plan-cost-sharing",
    title: "healthPlanCostSharing",
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
