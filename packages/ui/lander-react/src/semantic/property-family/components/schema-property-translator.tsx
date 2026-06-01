import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTranslatorProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTranslator({ value, description = "Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTranslatorProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TranslatorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-translator",
    shellClassName: "lander-semantic--schema-property-translator",
    title: "translator",
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
