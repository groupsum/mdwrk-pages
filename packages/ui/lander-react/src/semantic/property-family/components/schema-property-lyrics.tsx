import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LyricsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLyricsProps extends LyricsPropertyInput, GeneratedPropertyUiProps<LyricsPropertyInput> {}

export function SchemaPropertyLyrics({ value: legacyValue, description = "The words in the song.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLyricsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LyricsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-lyrics",
    shellClassName: "lander-semantic--schema-property-lyrics",
    title: "lyrics",
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
