import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySignOrSymptomProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySignOrSymptom({ value, description = "A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experience of the medical condition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySignOrSymptomProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SignOrSymptomPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sign-or-symptom",
    shellClassName: "lander-semantic--schema-property-sign-or-symptom",
    title: "signOrSymptom",
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
