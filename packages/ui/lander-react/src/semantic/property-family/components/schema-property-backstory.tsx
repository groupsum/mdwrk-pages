import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BackstoryPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBackstoryProps extends BackstoryPropertyInput, GeneratedPropertyUiProps<BackstoryPropertyInput> {}

export function SchemaPropertyBackstory({ value: legacyValue, description = "For an [[Article]], typically a [[NewsArticle]], the backstory property provides a textual summary giving a brief explanation of why and how an article was created. In a journalistic setting this could include information about reporting process, methods, interviews, data sources, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBackstoryProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyBackstory as typeof SchemaPropertyBackstory & { toStructuredData: (props: SchemaPropertyBackstoryProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
