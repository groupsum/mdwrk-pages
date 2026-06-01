import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TargetPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTargetProps extends TargetPropertyInput, GeneratedPropertyUiProps<TargetPropertyInput> {}

export function SchemaPropertyTarget({ value: legacyValue, description = "Indicates a target EntryPoint, or url, for an Action.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTargetProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TargetPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-target",
    shellClassName: "lander-semantic--schema-property-target",
    title: "target",
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
