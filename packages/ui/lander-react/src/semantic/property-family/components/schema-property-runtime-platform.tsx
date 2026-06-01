import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RuntimePlatformPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRuntimePlatformProps extends RuntimePlatformPropertyInput, GeneratedPropertyUiProps<RuntimePlatformPropertyInput> {}

export function SchemaPropertyRuntimePlatform({ value: legacyValue, description = "Runtime platform or script interpreter dependencies (example: Java v1, Python 2.3, .NET Framework 3.0).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRuntimePlatformProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
