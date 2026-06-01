import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanCoinsuranceOptionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHealthPlanCoinsuranceOption({ value, description = "Whether the coinsurance applies before or after deductible, etc. TODO: Is this a closed set?", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHealthPlanCoinsuranceOptionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanCoinsuranceOptionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-coinsurance-option",
    shellClassName: "lander-semantic--schema-property-health-plan-coinsurance-option",
    title: "healthPlanCoinsuranceOption",
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
