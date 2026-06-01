import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPublisherProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPublisher({ value, description = "The publisher of the article in question.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPublisherProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PublisherPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-publisher",
    shellClassName: "lander-semantic--schema-property-publisher",
    title: "publisher",
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
