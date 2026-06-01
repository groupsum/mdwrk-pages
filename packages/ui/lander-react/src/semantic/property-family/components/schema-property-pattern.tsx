import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPatternProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPattern({ value, description = "A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPatternProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PatternPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-pattern",
    shellClassName: "lander-semantic--schema-property-pattern",
    title: "pattern",
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
