import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyActionApplicationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyActionApplication({ value, description = "An application that can complete the request.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyActionApplicationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ActionApplicationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-action-application",
    shellClassName: "lander-semantic--schema-property-action-application",
    title: "actionApplication",
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
