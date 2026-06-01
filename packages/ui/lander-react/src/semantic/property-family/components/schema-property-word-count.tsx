import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { WordCountPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWordCountProps extends WordCountPropertyInput, GeneratedPropertyUiProps<WordCountPropertyInput> {}

export function SchemaPropertyWordCount({ value: legacyValue, description = "The number of words in the text of the CreativeWork such as an Article, Book, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyWordCountProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WordCountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-word-count",
    shellClassName: "lander-semantic--schema-property-word-count",
    title: "wordCount",
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
