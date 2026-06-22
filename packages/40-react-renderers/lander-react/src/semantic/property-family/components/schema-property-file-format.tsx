import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FileFormatPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFileFormatProps extends FileFormatPropertyInput, GeneratedPropertyUiProps<FileFormatPropertyInput> {}

export function SchemaPropertyFileFormat({ value: legacyValue, description = "Media type, typically MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml)) of the content, e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFileFormatProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FileFormatPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-file-format",
    shellClassName: "lander-semantic--schema-property-file-format",
    title: "fileFormat",
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

(SchemaPropertyFileFormat as typeof SchemaPropertyFileFormat & { toStructuredData: (props: SchemaPropertyFileFormatProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
