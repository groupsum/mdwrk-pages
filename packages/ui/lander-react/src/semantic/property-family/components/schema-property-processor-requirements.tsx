import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProcessorRequirementsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProcessorRequirements({ value, description = "Processor architecture required to run the application (e.g. IA64).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProcessorRequirementsProps) {
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
