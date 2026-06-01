import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLyricsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLyrics({ value, description = "The words in the song.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLyricsProps) {
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
