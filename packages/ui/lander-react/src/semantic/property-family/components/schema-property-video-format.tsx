import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { VideoFormatPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyVideoFormatProps extends VideoFormatPropertyInput, GeneratedPropertyUiProps<VideoFormatPropertyInput> {}

export function SchemaPropertyVideoFormat({ value: legacyValue, description = "The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyVideoFormatProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
