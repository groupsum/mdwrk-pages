import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ByArtistPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyByArtistProps extends ByArtistPropertyInput, GeneratedPropertyUiProps<ByArtistPropertyInput> {}

export function SchemaPropertyByArtist({ value: legacyValue, description = "The artist that performed this album or recording.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyByArtistProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ByArtistPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-by-artist",
    shellClassName: "lander-semantic--schema-property-by-artist",
    title: "byArtist",
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
