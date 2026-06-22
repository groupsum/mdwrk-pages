import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { VideoFrameSizePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyVideoFrameSizeProps extends VideoFrameSizePropertyInput, GeneratedPropertyUiProps<VideoFrameSizePropertyInput> {}

export function SchemaPropertyVideoFrameSize({ value: legacyValue, description = "The frame size of the video.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyVideoFrameSizeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyVideoFrameSize as typeof SchemaPropertyVideoFrameSize & { toStructuredData: (props: SchemaPropertyVideoFrameSizeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
