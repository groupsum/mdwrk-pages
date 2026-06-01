import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProcessorRequirementsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProcessorRequirementsProps extends ProcessorRequirementsPropertyInput, GeneratedPropertyUiProps<ProcessorRequirementsPropertyInput> {}

export function SchemaPropertyProcessorRequirements({ value: legacyValue, description = "Processor architecture required to run the application (e.g. IA64).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProcessorRequirementsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProcessorRequirementsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-processor-requirements",
    shellClassName: "lander-semantic--schema-property-processor-requirements",
    title: "processorRequirements",
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
