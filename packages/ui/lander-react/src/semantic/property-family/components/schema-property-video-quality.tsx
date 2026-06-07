import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { VideoQualityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyVideoQualityProps extends VideoQualityPropertyInput, GeneratedPropertyUiProps<VideoQualityPropertyInput> {}

export function SchemaPropertyVideoQuality({ value: legacyValue, description = "The quality of the video.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyVideoQualityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyVideoQuality as typeof SchemaPropertyVideoQuality & { toStructuredData: (props: SchemaPropertyVideoQualityProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
