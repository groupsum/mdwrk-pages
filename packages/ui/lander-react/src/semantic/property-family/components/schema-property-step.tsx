import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStepProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyStep({ value, description = "A single step item (as HowToStep, text, document, video, etc.) or a HowToSection.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyStepProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StepPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-step",
    shellClassName: "lander-semantic--schema-property-step",
    title: "step",
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
