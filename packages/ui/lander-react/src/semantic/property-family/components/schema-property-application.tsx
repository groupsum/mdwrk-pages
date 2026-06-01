import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyApplicationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyApplication({ value, description = "An application that can complete the request.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyApplicationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ApplicationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-application",
    shellClassName: "lander-semantic--schema-property-application",
    title: "application",
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
