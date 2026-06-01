import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGenreProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGenre({ value, description = "Genre of the creative work, broadcast channel or group.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGenreProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GenrePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-genre",
    shellClassName: "lander-semantic--schema-property-genre",
    title: "genre",
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
