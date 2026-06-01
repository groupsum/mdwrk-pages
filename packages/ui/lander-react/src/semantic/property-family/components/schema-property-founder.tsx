import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFounderProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFounder({ value, description = "A person or organization who founded this organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFounderProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FounderPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-founder",
    shellClassName: "lander-semantic--schema-property-founder",
    title: "founder",
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
