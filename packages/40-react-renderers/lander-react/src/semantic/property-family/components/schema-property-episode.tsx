import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EpisodePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEpisodeProps extends EpisodePropertyInput, GeneratedPropertyUiProps<EpisodePropertyInput> {}

export function SchemaPropertyEpisode({ value: legacyValue, description = "An episode of a TV, radio or game media within a series or season.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEpisodeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EpisodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-episode",
    shellClassName: "lander-semantic--schema-property-episode",
    title: "episode",
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

(SchemaPropertyEpisode as typeof SchemaPropertyEpisode & { toStructuredData: (props: SchemaPropertyEpisodeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
