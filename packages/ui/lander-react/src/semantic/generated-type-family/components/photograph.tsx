import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PhotographInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, renderGeneratedTypeCard } from "../shared.js";

export interface PhotographProps extends PhotographInput, GeneratedTypeUiProps<PhotographInput> {}

export function Photograph({ value: legacyValue, description = "A photograph.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: PhotographProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.PhotographStructuredData,
    defaultEyebrow: "Type",
    kind: "photograph",
    shellClassName: "lander-semantic--photograph",
    title: "Photograph",
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
