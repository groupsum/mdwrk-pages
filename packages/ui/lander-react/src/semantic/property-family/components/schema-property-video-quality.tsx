import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyVideoQualityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyVideoQuality({ value, description = "The quality of the video.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyVideoQualityProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.VideoQualityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-video-quality",
    shellClassName: "lander-semantic--schema-property-video-quality",
    title: "videoQuality",
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
