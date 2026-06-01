import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContentSizeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyContentSize({ value, description = "File size in (mega/kilo)bytes.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyContentSizeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContentSizePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-content-size",
    shellClassName: "lander-semantic--schema-property-content-size",
    title: "contentSize",
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
