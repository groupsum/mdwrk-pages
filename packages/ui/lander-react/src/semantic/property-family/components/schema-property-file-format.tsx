import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFileFormatProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFileFormat({ value, description = "Media type, typically MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml)) of the content, e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFileFormatProps) {
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
