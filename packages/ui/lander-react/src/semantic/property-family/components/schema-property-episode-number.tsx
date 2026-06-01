import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEpisodeNumberProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEpisodeNumber({ value, description = "Position of the episode within an ordered group of episodes.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEpisodeNumberProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EpisodeNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-episode-number",
    shellClassName: "lander-semantic--schema-property-episode-number",
    title: "episodeNumber",
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
