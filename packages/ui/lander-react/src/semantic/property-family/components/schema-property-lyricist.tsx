import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLyricistProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLyricist({ value, description = "The person who wrote the words.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLyricistProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LyricistPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-lyricist",
    shellClassName: "lander-semantic--schema-property-lyricist",
    title: "lyricist",
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
