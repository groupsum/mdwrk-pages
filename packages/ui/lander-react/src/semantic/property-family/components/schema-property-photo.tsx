import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PhotoPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPhotoProps extends PhotoPropertyInput, GeneratedPropertyUiProps<PhotoPropertyInput> {}

export function SchemaPropertyPhoto({ value: legacyValue, description = "A photograph of this place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPhotoProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PhotoPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-photo",
    shellClassName: "lander-semantic--schema-property-photo",
    title: "photo",
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
