import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PublishedOnPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPublishedOnProps extends PublishedOnPropertyInput, GeneratedPropertyUiProps<PublishedOnPropertyInput> {}

export function SchemaPropertyPublishedOn({ value: legacyValue, description = "A broadcast service associated with the publication event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPublishedOnProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PublishedOnPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-published-on",
    shellClassName: "lander-semantic--schema-property-published-on",
    title: "publishedOn",
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
