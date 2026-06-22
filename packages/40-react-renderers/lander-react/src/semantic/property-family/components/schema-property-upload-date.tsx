import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { UploadDatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUploadDateProps extends UploadDatePropertyInput, GeneratedPropertyUiProps<UploadDatePropertyInput> {}

export function SchemaPropertyUploadDate({ value: legacyValue, description = "Date (including time if available) when this media object was uploaded to this site.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyUploadDateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyUploadDate as typeof SchemaPropertyUploadDate & { toStructuredData: (props: SchemaPropertyUploadDateProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
