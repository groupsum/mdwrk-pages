import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFirstPerformanceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFirstPerformance({ value, description = "The date and place the work was first performed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFirstPerformanceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FirstPerformancePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-first-performance",
    shellClassName: "lander-semantic--schema-property-first-performance",
    title: "firstPerformance",
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
