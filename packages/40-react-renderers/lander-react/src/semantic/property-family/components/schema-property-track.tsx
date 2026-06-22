import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TrackPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTrackProps extends TrackPropertyInput, GeneratedPropertyUiProps<TrackPropertyInput> {}

export function SchemaPropertyTrack({ value: legacyValue, description = "A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTrackProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyTrack as typeof SchemaPropertyTrack & { toStructuredData: (props: SchemaPropertyTrackProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
