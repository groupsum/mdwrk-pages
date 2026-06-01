import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlbumProductionTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAlbumProductionType({ value, description = "Classification of the album by its type of content: soundtrack, live album, studio album, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAlbumProductionTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlbumProductionTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-album-production-type",
    shellClassName: "lander-semantic--schema-property-album-production-type",
    title: "albumProductionType",
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
