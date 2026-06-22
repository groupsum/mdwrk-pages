import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EmbedUrlPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEmbedUrlProps extends EmbedUrlPropertyInput, GeneratedPropertyUiProps<EmbedUrlPropertyInput> {}

export function SchemaPropertyEmbedUrl({ value: legacyValue, description = "A URL pointing to a player for a specific video. In general, this is the information in the ```src``` element of an ```embed``` tag and should not be the same as the content of the ```loc``` tag.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEmbedUrlProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EmbedUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-embed-url",
    shellClassName: "lander-semantic--schema-property-embed-url",
    title: "embedUrl",
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

(SchemaPropertyEmbedUrl as typeof SchemaPropertyEmbedUrl & { toStructuredData: (props: SchemaPropertyEmbedUrlProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
