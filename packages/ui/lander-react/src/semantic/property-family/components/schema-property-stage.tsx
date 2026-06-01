import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { StagePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStageProps extends StagePropertyInput, GeneratedPropertyUiProps<StagePropertyInput> {}

export function SchemaPropertyStage({ value: legacyValue, description = "The stage of the condition, if applicable.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyStageProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-stage",
    shellClassName: "lander-semantic--schema-property-stage",
    title: "stage",
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
