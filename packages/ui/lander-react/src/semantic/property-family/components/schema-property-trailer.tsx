import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TrailerPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTrailerProps extends TrailerPropertyInput, GeneratedPropertyUiProps<TrailerPropertyInput> {}

export function SchemaPropertyTrailer({ value: legacyValue, description = "The trailer of a movie or TV/radio series, season, episode, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTrailerProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TrailerPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-trailer",
    shellClassName: "lander-semantic--schema-property-trailer",
    title: "trailer",
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
