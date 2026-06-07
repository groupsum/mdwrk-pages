import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ExifDataPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExifDataProps extends ExifDataPropertyInput, GeneratedPropertyUiProps<ExifDataPropertyInput> {}

export function SchemaPropertyExifData({ value: legacyValue, description = "exif data for this object.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyExifDataProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyExifData as typeof SchemaPropertyExifData & { toStructuredData: (props: SchemaPropertyExifDataProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
