import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStatusProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyStatus({ value, description = "The status of the study (enumerated).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyStatusProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StatusPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-status",
    shellClassName: "lander-semantic--schema-property-status",
    title: "status",
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
