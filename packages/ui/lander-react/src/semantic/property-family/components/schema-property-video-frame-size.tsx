import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyVideoFrameSizeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyVideoFrameSize({ value, description = "The frame size of the video.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyVideoFrameSizeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.VideoFrameSizePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-video-frame-size",
    shellClassName: "lander-semantic--schema-property-video-frame-size",
    title: "videoFrameSize",
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
