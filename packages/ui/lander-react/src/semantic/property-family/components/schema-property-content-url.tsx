import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ContentUrlPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContentUrlProps extends ContentUrlPropertyInput, GeneratedPropertyUiProps<ContentUrlPropertyInput> {}

export function SchemaPropertyContentUrl({ value: legacyValue, description = "Actual bytes of the media object, for example the image file or video file.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyContentUrlProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContentUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-content-url",
    shellClassName: "lander-semantic--schema-property-content-url",
    title: "contentUrl",
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

(SchemaPropertyContentUrl as typeof SchemaPropertyContentUrl & { toStructuredData: (props: SchemaPropertyContentUrlProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
