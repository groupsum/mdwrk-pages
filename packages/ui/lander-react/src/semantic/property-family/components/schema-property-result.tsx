import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyResultProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyResult({ value, description = "The result produced in the action. E.g. John wrote *a book*.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyResultProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ResultPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-result",
    shellClassName: "lander-semantic--schema-property-result",
    title: "result",
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
