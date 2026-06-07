import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NumberOfEpisodesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNumberOfEpisodesProps extends NumberOfEpisodesPropertyInput, GeneratedPropertyUiProps<NumberOfEpisodesPropertyInput> {}

export function SchemaPropertyNumberOfEpisodes({ value: legacyValue, description = "The number of episodes in this season or series.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNumberOfEpisodesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NumberOfEpisodesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-number-of-episodes",
    shellClassName: "lander-semantic--schema-property-number-of-episodes",
    title: "numberOfEpisodes",
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

(SchemaPropertyNumberOfEpisodes as typeof SchemaPropertyNumberOfEpisodes & { toStructuredData: (props: SchemaPropertyNumberOfEpisodesProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
