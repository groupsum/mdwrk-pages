import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MemoryRequirementsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMemoryRequirementsProps extends MemoryRequirementsPropertyInput, GeneratedPropertyUiProps<MemoryRequirementsPropertyInput> {}

export function SchemaPropertyMemoryRequirements({ value: legacyValue, description = "Minimum memory requirements.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMemoryRequirementsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyMemoryRequirements as typeof SchemaPropertyMemoryRequirements & { toStructuredData: (props: SchemaPropertyMemoryRequirementsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
