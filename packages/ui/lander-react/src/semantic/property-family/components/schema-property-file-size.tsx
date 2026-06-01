import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFileSizeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFileSize({ value, description = "Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFileSizeProps) {
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
