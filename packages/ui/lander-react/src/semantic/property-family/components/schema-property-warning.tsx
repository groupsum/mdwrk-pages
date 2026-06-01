import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWarningProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyWarning({ value, description = "Any FDA or other warnings about the drug (text or URL).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyWarningProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WarningPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-warning",
    shellClassName: "lander-semantic--schema-property-warning",
    title: "warning",
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
