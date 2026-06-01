import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCodeValueProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCodeValue({ value, description = "A short textual code that uniquely identifies the value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCodeValueProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CodeValuePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-code-value",
    shellClassName: "lander-semantic--schema-property-code-value",
    title: "codeValue",
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
