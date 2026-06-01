import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExifDataProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyExifData({ value, description = "exif data for this object.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyExifDataProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ExifDataPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-exif-data",
    shellClassName: "lander-semantic--schema-property-exif-data",
    title: "exifData",
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
