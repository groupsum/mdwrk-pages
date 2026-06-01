import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTextProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyText({ value, description = "The textual content of this CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTextProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TextPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-text",
    shellClassName: "lander-semantic--schema-property-text",
    title: "text",
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
