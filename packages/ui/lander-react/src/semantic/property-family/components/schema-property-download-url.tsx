import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DownloadUrlPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDownloadUrlProps extends DownloadUrlPropertyInput, GeneratedPropertyUiProps<DownloadUrlPropertyInput> {}

export function SchemaPropertyDownloadUrl({ value: legacyValue, description = "If the file can be downloaded, URL to download the binary.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDownloadUrlProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DownloadUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-download-url",
    shellClassName: "lander-semantic--schema-property-download-url",
    title: "downloadUrl",
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
