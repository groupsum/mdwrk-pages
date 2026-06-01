import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AudioPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAudioProps extends AudioPropertyInput, GeneratedPropertyUiProps<AudioPropertyInput> {}

export function SchemaPropertyAudio({ value: legacyValue, description = "An embedded audio object.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAudioProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AudioPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-audio",
    shellClassName: "lander-semantic--schema-property-audio",
    title: "audio",
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
