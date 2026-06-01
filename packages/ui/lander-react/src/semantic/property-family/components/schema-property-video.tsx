import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { VideoPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyVideoProps extends VideoPropertyInput, GeneratedPropertyUiProps<VideoPropertyInput> {}

export function SchemaPropertyVideo({ value: legacyValue, description = "An embedded video object.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyVideoProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.VideoPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-video",
    shellClassName: "lander-semantic--schema-property-video",
    title: "video",
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
