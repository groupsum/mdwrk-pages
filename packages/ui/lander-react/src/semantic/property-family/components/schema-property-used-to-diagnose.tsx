import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUsedToDiagnoseProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyUsedToDiagnose({ value, description = "A condition the test is used to diagnose.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyUsedToDiagnoseProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UsedToDiagnosePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-used-to-diagnose",
    shellClassName: "lander-semantic--schema-property-used-to-diagnose",
    title: "usedToDiagnose",
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
