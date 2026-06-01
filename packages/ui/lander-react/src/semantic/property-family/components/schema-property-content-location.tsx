import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContentLocationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyContentLocation({ value, description = "The location depicted or described in the content. For example, the location in a photograph or painting.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyContentLocationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContentLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-content-location",
    shellClassName: "lander-semantic--schema-property-content-location",
    title: "contentLocation",
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
