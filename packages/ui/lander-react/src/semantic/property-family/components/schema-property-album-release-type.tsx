import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlbumReleaseTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAlbumReleaseType({ value, description = "The kind of release which this album is: single, EP or album.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAlbumReleaseTypeProps) {
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
