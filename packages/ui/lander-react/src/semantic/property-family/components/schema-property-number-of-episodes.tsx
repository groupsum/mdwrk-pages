import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNumberOfEpisodesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNumberOfEpisodes({ value, description = "The number of episodes in this season or series.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNumberOfEpisodesProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NumberOfEpisodesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-number-of-episodes",
    shellClassName: "lander-semantic--schema-property-number-of-episodes",
    title: "numberOfEpisodes",
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
