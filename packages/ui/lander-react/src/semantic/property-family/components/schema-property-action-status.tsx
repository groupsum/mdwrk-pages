import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyActionStatusProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyActionStatus({ value, description = "Indicates the current disposition of the Action.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyActionStatusProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ActionStatusPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-action-status",
    shellClassName: "lander-semantic--schema-property-action-status",
    title: "actionStatus",
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
