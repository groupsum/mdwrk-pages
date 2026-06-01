import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRepeatCountProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRepeatCount({ value, description = "Defines the number of times a recurring [[Event]] will take place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRepeatCountProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RepeatCountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-repeat-count",
    shellClassName: "lander-semantic--schema-property-repeat-count",
    title: "repeatCount",
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
