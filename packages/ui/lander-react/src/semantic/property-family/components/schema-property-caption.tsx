import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCaptionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCaption({ value, description = "The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCaptionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CaptionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-caption",
    shellClassName: "lander-semantic--schema-property-caption",
    title: "caption",
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
