import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProcessingTimeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProcessingTime({ value, description = "Estimated processing time for the service using this channel.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProcessingTimeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProcessingTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-processing-time",
    shellClassName: "lander-semantic--schema-property-processing-time",
    title: "processingTime",
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
