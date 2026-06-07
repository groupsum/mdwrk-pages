import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { StepsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStepsProps extends StepsPropertyInput, GeneratedPropertyUiProps<StepsPropertyInput> {}

export function SchemaPropertySteps({ value: legacyValue, description = "A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyStepsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertySteps as typeof SchemaPropertySteps & { toStructuredData: (props: SchemaPropertyStepsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
