import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FileSizePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFileSizeProps extends FileSizePropertyInput, GeneratedPropertyUiProps<FileSizePropertyInput> {}

export function SchemaPropertyFileSize({ value: legacyValue, description = "Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFileSizeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FileSizePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-file-size",
    shellClassName: "lander-semantic--schema-property-file-size",
    title: "fileSize",
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
