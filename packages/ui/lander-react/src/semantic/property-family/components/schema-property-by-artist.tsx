import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyByArtistProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyByArtist({ value, description = "The artist that performed this album or recording.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyByArtistProps) {
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
