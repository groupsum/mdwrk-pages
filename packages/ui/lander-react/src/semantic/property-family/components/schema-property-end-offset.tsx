import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEndOffsetProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEndOffset({ value, description = "The end time of the clip expressed as the number of seconds from the beginning of the work.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEndOffsetProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EndOffsetPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-end-offset",
    shellClassName: "lander-semantic--schema-property-end-offset",
    title: "endOffset",
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
