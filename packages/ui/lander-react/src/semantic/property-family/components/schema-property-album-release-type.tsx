import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AlbumReleaseTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlbumReleaseTypeProps extends AlbumReleaseTypePropertyInput, GeneratedPropertyUiProps<AlbumReleaseTypePropertyInput> {}

export function SchemaPropertyAlbumReleaseType({ value: legacyValue, description = "The kind of release which this album is: single, EP or album.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAlbumReleaseTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlbumReleaseTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-album-release-type",
    shellClassName: "lander-semantic--schema-property-album-release-type",
    title: "albumReleaseType",
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
