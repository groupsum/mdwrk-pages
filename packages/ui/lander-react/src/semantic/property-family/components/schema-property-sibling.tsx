import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySiblingProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySibling({ value, description = "A sibling of the person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySiblingProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SiblingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sibling",
    shellClassName: "lander-semantic--schema-property-sibling",
    title: "sibling",
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
