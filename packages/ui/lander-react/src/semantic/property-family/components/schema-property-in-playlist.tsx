import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInPlaylistProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInPlaylist({ value, description = "The playlist to which this recording belongs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInPlaylistProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InPlaylistPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-in-playlist",
    shellClassName: "lander-semantic--schema-property-in-playlist",
    title: "inPlaylist",
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
