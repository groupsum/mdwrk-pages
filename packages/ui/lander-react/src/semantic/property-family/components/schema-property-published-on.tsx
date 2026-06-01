import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPublishedOnProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPublishedOn({ value, description = "A broadcast service associated with the publication event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPublishedOnProps) {
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
