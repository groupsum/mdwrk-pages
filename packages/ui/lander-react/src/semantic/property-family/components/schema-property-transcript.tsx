import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TranscriptPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTranscriptProps extends TranscriptPropertyInput, GeneratedPropertyUiProps<TranscriptPropertyInput> {}

export function SchemaPropertyTranscript({ value: legacyValue, description = "If this MediaObject is an AudioObject or VideoObject, the transcript of that object.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTranscriptProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TranscriptPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-transcript",
    shellClassName: "lander-semantic--schema-property-transcript",
    title: "transcript",
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
