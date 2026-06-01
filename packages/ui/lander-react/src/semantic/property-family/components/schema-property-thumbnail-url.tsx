import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyThumbnailUrlProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyThumbnailUrl({ value, description = "A thumbnail image relevant to the Thing.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyThumbnailUrlProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ThumbnailUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-thumbnail-url",
    shellClassName: "lander-semantic--schema-property-thumbnail-url",
    title: "thumbnailUrl",
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
