import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMusicArrangementProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMusicArrangement({ value, description = "An arrangement derived from the composition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMusicArrangementProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MusicArrangementPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-music-arrangement",
    shellClassName: "lander-semantic--schema-property-music-arrangement",
    title: "musicArrangement",
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
