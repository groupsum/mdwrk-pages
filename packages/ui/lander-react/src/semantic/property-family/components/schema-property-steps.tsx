import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStepsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySteps({ value, description = "A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyStepsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StepsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-steps",
    shellClassName: "lander-semantic--schema-property-steps",
    title: "steps",
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
