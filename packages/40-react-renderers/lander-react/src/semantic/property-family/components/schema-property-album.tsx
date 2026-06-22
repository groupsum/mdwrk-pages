import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AlbumPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlbumProps extends AlbumPropertyInput, GeneratedPropertyUiProps<AlbumPropertyInput> {}

export function SchemaPropertyAlbum({ value: legacyValue, description = "A music album.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAlbumProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlbumPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-album",
    shellClassName: "lander-semantic--schema-property-album",
    title: "album",
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

(SchemaPropertyAlbum as typeof SchemaPropertyAlbum & { toStructuredData: (props: SchemaPropertyAlbumProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
