import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTrackProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTrack({ value, description = "A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTrackProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TrackPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-track",
    shellClassName: "lander-semantic--schema-property-track",
    title: "track",
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
