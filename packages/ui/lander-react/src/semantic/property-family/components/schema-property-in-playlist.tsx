import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InPlaylistPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInPlaylistProps extends InPlaylistPropertyInput, GeneratedPropertyUiProps<InPlaylistPropertyInput> {}

export function SchemaPropertyInPlaylist({ value: legacyValue, description = "The playlist to which this recording belongs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInPlaylistProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
