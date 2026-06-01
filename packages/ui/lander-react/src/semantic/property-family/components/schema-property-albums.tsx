import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlbumsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAlbums({ value, description = "A collection of music albums.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAlbumsProps) {
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
