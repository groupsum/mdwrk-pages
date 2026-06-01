import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInAlbumProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInAlbum({ value, description = "The album to which this recording belongs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInAlbumProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InAlbumPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-in-album",
    shellClassName: "lander-semantic--schema-property-in-album",
    title: "inAlbum",
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
