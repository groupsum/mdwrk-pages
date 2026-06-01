import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBackstoryProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBackstory({ value, description = "For an [[Article]], typically a [[NewsArticle]], the backstory property provides a textual summary giving a brief explanation of why and how an article was created. In a journalistic setting this could include information about reporting process, methods, interviews, data sources, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBackstoryProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BackstoryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-backstory",
    shellClassName: "lander-semantic--schema-property-backstory",
    title: "backstory",
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
