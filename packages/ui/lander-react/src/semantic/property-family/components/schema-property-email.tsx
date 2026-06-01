import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEmailProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEmail({ value, description = "Email address.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEmailProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EmailPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-email",
    shellClassName: "lander-semantic--schema-property-email",
    title: "email",
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
