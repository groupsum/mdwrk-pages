import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTotalTimeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTotalTime({ value, description = "The total time required to perform instructions or a direction (including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTotalTimeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TotalTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-total-time",
    shellClassName: "lander-semantic--schema-property-total-time",
    title: "totalTime",
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
