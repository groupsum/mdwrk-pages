import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTracksProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTracks({ value, description = "A music recording (track)&#x2014;usually a single song.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTracksProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TracksPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-tracks",
    shellClassName: "lander-semantic--schema-property-tracks",
    title: "tracks",
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
