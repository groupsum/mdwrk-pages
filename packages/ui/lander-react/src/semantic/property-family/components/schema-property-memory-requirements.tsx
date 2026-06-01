import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMemoryRequirementsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMemoryRequirements({ value, description = "Minimum memory requirements.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMemoryRequirementsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MemoryRequirementsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-memory-requirements",
    shellClassName: "lander-semantic--schema-property-memory-requirements",
    title: "memoryRequirements",
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
