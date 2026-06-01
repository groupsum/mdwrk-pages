import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPerformTimeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPerformTime({ value, description = "The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPerformTimeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PerformTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-perform-time",
    shellClassName: "lander-semantic--schema-property-perform-time",
    title: "performTime",
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
