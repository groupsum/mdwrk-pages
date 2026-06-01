import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEpisodeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEpisode({ value, description = "An episode of a TV, radio or game media within a series or season.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEpisodeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EpisodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-episode",
    shellClassName: "lander-semantic--schema-property-episode",
    title: "episode",
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
