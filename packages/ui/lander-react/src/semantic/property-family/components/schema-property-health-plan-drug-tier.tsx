import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanDrugTierProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHealthPlanDrugTier({ value, description = "The tier(s) of drugs offered by this formulary or insurance plan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHealthPlanDrugTierProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanDrugTierPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-drug-tier",
    shellClassName: "lander-semantic--schema-property-health-plan-drug-tier",
    title: "healthPlanDrugTier",
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
