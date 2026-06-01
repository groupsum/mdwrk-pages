import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EpisodesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEpisodesProps extends EpisodesPropertyInput, GeneratedPropertyUiProps<EpisodesPropertyInput> {}

export function SchemaPropertyEpisodes({ value: legacyValue, description = "An episode of a TV/radio series or season.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEpisodesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EpisodesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-episodes",
    shellClassName: "lander-semantic--schema-property-episodes",
    title: "episodes",
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
