import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MusicByPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMusicByProps extends MusicByPropertyInput, GeneratedPropertyUiProps<MusicByPropertyInput> {}

export function SchemaPropertyMusicBy({ value: legacyValue, description = "The composer of the soundtrack.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMusicByProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MusicByPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-music-by",
    shellClassName: "lander-semantic--schema-property-music-by",
    title: "musicBy",
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
