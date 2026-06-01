import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyActionProcessProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyActionProcess({ value, description = "Description of the process by which the action was performed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyActionProcessProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ActionProcessPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-action-process",
    shellClassName: "lander-semantic--schema-property-action-process",
    title: "actionProcess",
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
