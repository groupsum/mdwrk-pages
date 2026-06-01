import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthConditionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHealthCondition({ value, description = "Specifying the health condition(s) of a patient, medical study, or other target audience.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHealthConditionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthConditionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-condition",
    shellClassName: "lander-semantic--schema-property-health-condition",
    title: "healthCondition",
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
