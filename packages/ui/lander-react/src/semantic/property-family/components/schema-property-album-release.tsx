import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlbumReleaseProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAlbumRelease({ value, description = "A release of this album.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAlbumReleaseProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlbumReleasePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-album-release",
    shellClassName: "lander-semantic--schema-property-album-release",
    title: "albumRelease",
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
