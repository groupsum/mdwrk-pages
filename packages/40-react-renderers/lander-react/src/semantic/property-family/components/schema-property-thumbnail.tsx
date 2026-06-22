import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ThumbnailPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyThumbnailProps extends ThumbnailPropertyInput, GeneratedPropertyUiProps<ThumbnailPropertyInput> {}

export function SchemaPropertyThumbnail({ value: legacyValue, description = "Thumbnail image for an image or video.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyThumbnailProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ThumbnailPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-thumbnail",
    shellClassName: "lander-semantic--schema-property-thumbnail",
    title: "thumbnail",
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

(SchemaPropertyThumbnail as typeof SchemaPropertyThumbnail & { toStructuredData: (props: SchemaPropertyThumbnailProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
