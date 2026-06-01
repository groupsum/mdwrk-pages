import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPublishedByProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPublishedBy({ value, description = "An agent associated with the publication event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPublishedByProps) {
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
