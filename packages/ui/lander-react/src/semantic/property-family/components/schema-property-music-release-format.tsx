import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMusicReleaseFormatProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMusicReleaseFormat({ value, description = "Format of this release (the type of recording media used, i.e. compact disc, digital media, LP, etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMusicReleaseFormatProps) {
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
