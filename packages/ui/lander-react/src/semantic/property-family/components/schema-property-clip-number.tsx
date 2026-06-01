import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ClipNumberPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyClipNumberProps extends ClipNumberPropertyInput, GeneratedPropertyUiProps<ClipNumberPropertyInput> {}

export function SchemaPropertyClipNumber({ value: legacyValue, description = "Position of the clip within an ordered group of clips.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyClipNumberProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ClipNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-clip-number",
    shellClassName: "lander-semantic--schema-property-clip-number",
    title: "clipNumber",
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
