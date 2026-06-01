import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFrequencyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFrequency({ value, description = "How often the dose is taken, e.g. 'daily'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFrequencyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FrequencyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-frequency",
    shellClassName: "lander-semantic--schema-property-frequency",
    title: "frequency",
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
