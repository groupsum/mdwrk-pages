import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContentReferenceTimeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyContentReferenceTime({ value, description = "The specific time described by a creative work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyContentReferenceTimeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContentReferenceTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-content-reference-time",
    shellClassName: "lander-semantic--schema-property-content-reference-time",
    title: "contentReferenceTime",
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
