import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MusicArrangementPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMusicArrangementProps extends MusicArrangementPropertyInput, GeneratedPropertyUiProps<MusicArrangementPropertyInput> {}

export function SchemaPropertyMusicArrangement({ value: legacyValue, description = "An arrangement derived from the composition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMusicArrangementProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MusicArrangementPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-music-arrangement",
    shellClassName: "lander-semantic--schema-property-music-arrangement",
    title: "musicArrangement",
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

(SchemaPropertyMusicArrangement as typeof SchemaPropertyMusicArrangement & { toStructuredData: (props: SchemaPropertyMusicArrangementProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
