import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyThumbnailProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyThumbnail({ value, description = "Thumbnail image for an image or video.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyThumbnailProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ThumbnailPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-thumbnail",
    shellClassName: "lander-semantic--schema-property-thumbnail",
    title: "thumbnail",
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
