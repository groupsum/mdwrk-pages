import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStartOffsetProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyStartOffset({ value, description = "The start time of the clip expressed as the number of seconds from the beginning of the work.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyStartOffsetProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StartOffsetPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-start-offset",
    shellClassName: "lander-semantic--schema-property-start-offset",
    title: "startOffset",
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
