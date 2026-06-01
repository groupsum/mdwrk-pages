import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContentTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyContentType({ value, description = "The supported content type(s) for an EntryPoint response.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyContentTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContentTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-content-type",
    shellClassName: "lander-semantic--schema-property-content-type",
    title: "contentType",
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
