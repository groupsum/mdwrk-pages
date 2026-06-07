import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TracksPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTracksProps extends TracksPropertyInput, GeneratedPropertyUiProps<TracksPropertyInput> {}

export function SchemaPropertyTracks({ value: legacyValue, description = "A music recording (track)&#x2014;usually a single song.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTracksProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyTracks as typeof SchemaPropertyTracks & { toStructuredData: (props: SchemaPropertyTracksProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
