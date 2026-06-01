import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEmbeddedTextCaptionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEmbeddedTextCaption({ value, description = "Represents textual captioning from a [[MediaObject]], e.g. text of a 'meme'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEmbeddedTextCaptionProps) {
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
