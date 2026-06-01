import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEpisodesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEpisodes({ value, description = "An episode of a TV/radio series or season.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEpisodesProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EpisodesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-episodes",
    shellClassName: "lander-semantic--schema-property-episodes",
    title: "episodes",
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
