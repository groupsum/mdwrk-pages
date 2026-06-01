import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyVideoFormatProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyVideoFormat({ value, description = "The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyVideoFormatProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.VideoFormatPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-video-format",
    shellClassName: "lander-semantic--schema-property-video-format",
    title: "videoFormat",
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
