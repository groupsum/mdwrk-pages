import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCodingSystemProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCodingSystem({ value, description = "The coding system, e.g. 'ICD-10'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCodingSystemProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CodingSystemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-coding-system",
    shellClassName: "lander-semantic--schema-property-coding-system",
    title: "codingSystem",
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
