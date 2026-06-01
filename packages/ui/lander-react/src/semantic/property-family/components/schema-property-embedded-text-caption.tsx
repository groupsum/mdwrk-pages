import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EmbeddedTextCaptionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEmbeddedTextCaptionProps extends EmbeddedTextCaptionPropertyInput, GeneratedPropertyUiProps<EmbeddedTextCaptionPropertyInput> {}

export function SchemaPropertyEmbeddedTextCaption({ value: legacyValue, description = "Represents textual captioning from a [[MediaObject]], e.g. text of a 'meme'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEmbeddedTextCaptionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EmbeddedTextCaptionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-embedded-text-caption",
    shellClassName: "lander-semantic--schema-property-embedded-text-caption",
    title: "embeddedTextCaption",
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
