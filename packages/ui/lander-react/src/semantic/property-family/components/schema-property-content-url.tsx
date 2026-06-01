import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContentUrlProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyContentUrl({ value, description = "Actual bytes of the media object, for example the image file or video file.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyContentUrlProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContentUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-content-url",
    shellClassName: "lander-semantic--schema-property-content-url",
    title: "contentUrl",
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
