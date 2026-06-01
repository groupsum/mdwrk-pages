import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlbumProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAlbum({ value, description = "A music album.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAlbumProps) {
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
