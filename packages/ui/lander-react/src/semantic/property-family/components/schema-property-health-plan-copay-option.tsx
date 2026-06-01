import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanCopayOptionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHealthPlanCopayOption({ value, description = "Whether the copay is before or after deductible, etc. TODO: Is this a closed set?", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHealthPlanCopayOptionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanCopayOptionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-copay-option",
    shellClassName: "lander-semantic--schema-property-health-plan-copay-option",
    title: "healthPlanCopayOption",
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
