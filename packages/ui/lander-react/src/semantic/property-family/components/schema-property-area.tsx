import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAreaProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyArea({ value, description = "The area within which users can expect to reach the broadcast service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAreaProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AreaPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-area",
    shellClassName: "lander-semantic--schema-property-area",
    title: "area",
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
