import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MusicReleaseFormatPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMusicReleaseFormatProps extends MusicReleaseFormatPropertyInput, GeneratedPropertyUiProps<MusicReleaseFormatPropertyInput> {}

export function SchemaPropertyMusicReleaseFormat({ value: legacyValue, description = "Format of this release (the type of recording media used, i.e. compact disc, digital media, LP, etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMusicReleaseFormatProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MusicReleaseFormatPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-music-release-format",
    shellClassName: "lander-semantic--schema-property-music-release-format",
    title: "musicReleaseFormat",
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
