import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EpisodeNumberPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEpisodeNumberProps extends EpisodeNumberPropertyInput, GeneratedPropertyUiProps<EpisodeNumberPropertyInput> {}

export function SchemaPropertyEpisodeNumber({ value: legacyValue, description = "Position of the episode within an ordered group of episodes.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEpisodeNumberProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EpisodeNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-episode-number",
    shellClassName: "lander-semantic--schema-property-episode-number",
    title: "episodeNumber",
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

(SchemaPropertyEpisodeNumber as typeof SchemaPropertyEpisodeNumber & { toStructuredData: (props: SchemaPropertyEpisodeNumberProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
