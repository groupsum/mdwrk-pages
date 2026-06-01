import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAbstractProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAbstract({ value, description = "An abstract is a short description that summarizes a [[CreativeWork]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAbstractProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AbstractPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-abstract",
    shellClassName: "lander-semantic--schema-property-abstract",
    title: "abstract",
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
