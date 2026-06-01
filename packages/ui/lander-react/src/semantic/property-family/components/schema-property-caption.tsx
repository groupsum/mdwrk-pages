import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CaptionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCaptionProps extends CaptionPropertyInput, GeneratedPropertyUiProps<CaptionPropertyInput> {}

export function SchemaPropertyCaption({ value: legacyValue, description = "The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCaptionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
