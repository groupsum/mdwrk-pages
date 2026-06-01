import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTrailerProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTrailer({ value, description = "The trailer of a movie or TV/radio series, season, episode, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTrailerProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TrailerPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-trailer",
    shellClassName: "lander-semantic--schema-property-trailer",
    title: "trailer",
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
