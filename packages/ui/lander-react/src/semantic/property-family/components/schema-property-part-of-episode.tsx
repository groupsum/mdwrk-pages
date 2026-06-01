import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PartOfEpisodePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPartOfEpisodeProps extends PartOfEpisodePropertyInput, GeneratedPropertyUiProps<PartOfEpisodePropertyInput> {}

export function SchemaPropertyPartOfEpisode({ value: legacyValue, description = "The episode to which this clip belongs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPartOfEpisodeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PartOfEpisodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-part-of-episode",
    shellClassName: "lander-semantic--schema-property-part-of-episode",
    title: "partOfEpisode",
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
