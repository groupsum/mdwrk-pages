import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EncodingFormatPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEncodingFormatProps extends EncodingFormatPropertyInput, GeneratedPropertyUiProps<EncodingFormatPropertyInput> {}

export function SchemaPropertyEncodingFormat({ value: legacyValue, description = "Media type typically expressed using a MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml) and [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)), e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.\n\nIn cases where a [[CreativeWork]] has several media type representations, [[encoding]] can be used to indicate each [[MediaObject]] alongside particular [[encodingFormat]] information.\n\nUnregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEncodingFormatProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EncodingFormatPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-encoding-format",
    shellClassName: "lander-semantic--schema-property-encoding-format",
    title: "encodingFormat",
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

(SchemaPropertyEncodingFormat as typeof SchemaPropertyEncodingFormat & { toStructuredData: (props: SchemaPropertyEncodingFormatProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
