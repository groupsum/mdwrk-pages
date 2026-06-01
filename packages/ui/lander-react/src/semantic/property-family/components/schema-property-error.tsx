import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyErrorProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyError({ value, description = "For failed actions, more information on the cause of the failure. Consider using the Error type.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyErrorProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ErrorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-error",
    shellClassName: "lander-semantic--schema-property-error",
    title: "error",
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
