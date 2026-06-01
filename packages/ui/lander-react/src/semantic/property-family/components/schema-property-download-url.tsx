import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDownloadUrlProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDownloadUrl({ value, description = "If the file can be downloaded, URL to download the binary.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDownloadUrlProps) {
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
