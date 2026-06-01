import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTargetProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTarget({ value, description = "Indicates a target EntryPoint, or url, for an Action.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTargetProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TargetPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-target",
    shellClassName: "lander-semantic--schema-property-target",
    title: "target",
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
