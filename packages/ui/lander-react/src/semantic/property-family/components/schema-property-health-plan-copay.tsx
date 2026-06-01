import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanCopayProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHealthPlanCopay({ value, description = "The copay amount.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHealthPlanCopayProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanCopayPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-copay",
    shellClassName: "lander-semantic--schema-property-health-plan-copay",
    title: "healthPlanCopay",
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
