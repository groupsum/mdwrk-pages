import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUploadDateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyUploadDate({ value, description = "Date (including time if available) when this media object was uploaded to this site.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyUploadDateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UploadDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-upload-date",
    shellClassName: "lander-semantic--schema-property-upload-date",
    title: "uploadDate",
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
