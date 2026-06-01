import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTargetUrlProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTargetUrl({ value, description = "The URL of a node in an established educational framework.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTargetUrlProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TargetUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-target-url",
    shellClassName: "lander-semantic--schema-property-target-url",
    title: "targetUrl",
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
