import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPartOfEpisodeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPartOfEpisode({ value, description = "The episode to which this clip belongs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPartOfEpisodeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PartOfEpisodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-part-of-episode",
    shellClassName: "lander-semantic--schema-property-part-of-episode",
    title: "partOfEpisode",
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
