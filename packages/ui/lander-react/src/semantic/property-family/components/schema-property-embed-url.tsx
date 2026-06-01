import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEmbedUrlProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEmbedUrl({ value, description = "A URL pointing to a player for a specific video. In general, this is the information in the ```src``` element of an ```embed``` tag and should not be the same as the content of the ```loc``` tag.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEmbedUrlProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EmbedUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-embed-url",
    shellClassName: "lander-semantic--schema-property-embed-url",
    title: "embedUrl",
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
