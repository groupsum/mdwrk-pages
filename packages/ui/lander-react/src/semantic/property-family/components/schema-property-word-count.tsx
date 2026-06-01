import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWordCountProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyWordCount({ value, description = "The number of words in the text of the CreativeWork such as an Article, Book, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyWordCountProps) {
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
