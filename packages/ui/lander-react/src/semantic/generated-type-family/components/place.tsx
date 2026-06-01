import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PlaceInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, renderGeneratedTypeCard } from "../shared.js";

export interface PlaceProps extends PlaceInput, GeneratedTypeUiProps<PlaceInput> {}

export function Place({ value: legacyValue, description = "Entities that have a somewhat fixed, physical extension.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: PlaceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.PlaceStructuredData,
    defaultEyebrow: "Type",
    kind: "place",
    shellClassName: "lander-semantic--place",
    title: "Place",
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
