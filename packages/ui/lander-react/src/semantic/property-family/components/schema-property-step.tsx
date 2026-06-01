import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { StepPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStepProps extends StepPropertyInput, GeneratedPropertyUiProps<StepPropertyInput> {}

export function SchemaPropertyStep({ value: legacyValue, description = "A single step item (as HowToStep, text, document, video, etc.) or a HowToSection.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyStepProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
