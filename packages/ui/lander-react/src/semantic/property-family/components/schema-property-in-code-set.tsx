import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInCodeSetProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInCodeSet({ value, description = "A [[CategoryCodeSet]] that contains this category code.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInCodeSetProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InCodeSetPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-in-code-set",
    shellClassName: "lander-semantic--schema-property-in-code-set",
    title: "inCodeSet",
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
