import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRecordedAsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRecordedAs({ value, description = "An audio recording of the work.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRecordedAsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RecordedAsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-recorded-as",
    shellClassName: "lander-semantic--schema-property-recorded-as",
    title: "recordedAs",
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
