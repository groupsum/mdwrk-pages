import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ThumbnailUrlPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyThumbnailUrlProps extends ThumbnailUrlPropertyInput, GeneratedPropertyUiProps<ThumbnailUrlPropertyInput> {}

export function SchemaPropertyThumbnailUrl({ value: legacyValue, description = "A thumbnail image relevant to the Thing.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyThumbnailUrlProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ThumbnailUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-thumbnail-url",
    shellClassName: "lander-semantic--schema-property-thumbnail-url",
    title: "thumbnailUrl",
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

(SchemaPropertyThumbnailUrl as typeof SchemaPropertyThumbnailUrl & { toStructuredData: (props: SchemaPropertyThumbnailUrlProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
