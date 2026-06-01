import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNumTracksProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNumTracks({ value, description = "The number of tracks in this album or playlist.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNumTracksProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NumTracksPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-num-tracks",
    shellClassName: "lander-semantic--schema-property-num-tracks",
    title: "numTracks",
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
