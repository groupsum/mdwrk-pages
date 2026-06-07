import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProcessingTimePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProcessingTimeProps extends ProcessingTimePropertyInput, GeneratedPropertyUiProps<ProcessingTimePropertyInput> {}

export function SchemaPropertyProcessingTime({ value: legacyValue, description = "Estimated processing time for the service using this channel.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProcessingTimeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyProcessingTime as typeof SchemaPropertyProcessingTime & { toStructuredData: (props: SchemaPropertyProcessingTimeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
