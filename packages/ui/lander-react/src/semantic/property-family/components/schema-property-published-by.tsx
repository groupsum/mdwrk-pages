import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PublishedByPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPublishedByProps extends PublishedByPropertyInput, GeneratedPropertyUiProps<PublishedByPropertyInput> {}

export function SchemaPropertyPublishedBy({ value: legacyValue, description = "An agent associated with the publication event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPublishedByProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PublishedByPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-published-by",
    shellClassName: "lander-semantic--schema-property-published-by",
    title: "publishedBy",
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
