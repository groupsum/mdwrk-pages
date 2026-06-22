import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TranslatorPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTranslatorProps extends TranslatorPropertyInput, GeneratedPropertyUiProps<TranslatorPropertyInput> {}

export function SchemaPropertyTranslator({ value: legacyValue, description = "Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTranslatorProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyTranslator as typeof SchemaPropertyTranslator & { toStructuredData: (props: SchemaPropertyTranslatorProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
