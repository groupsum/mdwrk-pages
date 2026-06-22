import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NumTracksPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNumTracksProps extends NumTracksPropertyInput, GeneratedPropertyUiProps<NumTracksPropertyInput> {}

export function SchemaPropertyNumTracks({ value: legacyValue, description = "The number of tracks in this album or playlist.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNumTracksProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyNumTracks as typeof SchemaPropertyNumTracks & { toStructuredData: (props: SchemaPropertyNumTracksProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
