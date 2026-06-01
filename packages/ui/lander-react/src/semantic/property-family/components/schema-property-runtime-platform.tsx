import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRuntimePlatformProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRuntimePlatform({ value, description = "Runtime platform or script interpreter dependencies (example: Java v1, Python 2.3, .NET Framework 3.0).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRuntimePlatformProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RuntimePlatformPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-runtime-platform",
    shellClassName: "lander-semantic--schema-property-runtime-platform",
    title: "runtimePlatform",
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
