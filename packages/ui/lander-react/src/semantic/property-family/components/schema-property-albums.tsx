import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AlbumsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlbumsProps extends AlbumsPropertyInput, GeneratedPropertyUiProps<AlbumsPropertyInput> {}

export function SchemaPropertyAlbums({ value: legacyValue, description = "A collection of music albums.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAlbumsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlbumsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-albums",
    shellClassName: "lander-semantic--schema-property-albums",
    title: "albums",
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
