import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUrlProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyUrl({ value, description = "URL of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyUrlProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-url",
    shellClassName: "lander-semantic--schema-property-url",
    title: "url",
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
