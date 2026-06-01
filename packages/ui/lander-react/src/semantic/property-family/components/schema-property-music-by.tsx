import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMusicByProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMusicBy({ value, description = "The composer of the soundtrack.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMusicByProps) {
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
