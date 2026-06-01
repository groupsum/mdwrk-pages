import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PhotosPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPhotosProps extends PhotosPropertyInput, GeneratedPropertyUiProps<PhotosPropertyInput> {}

export function SchemaPropertyPhotos({ value: legacyValue, description = "Photographs of this place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPhotosProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PhotosPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-photos",
    shellClassName: "lander-semantic--schema-property-photos",
    title: "photos",
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
