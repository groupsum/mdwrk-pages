import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { StageAsNumberPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStageAsNumberProps extends StageAsNumberPropertyInput, GeneratedPropertyUiProps<StageAsNumberPropertyInput> {}

export function SchemaPropertyStageAsNumber({ value: legacyValue, description = "The stage represented as a number, e.g. 3.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyStageAsNumberProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StageAsNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-stage-as-number",
    shellClassName: "lander-semantic--schema-property-stage-as-number",
    title: "stageAsNumber",
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
