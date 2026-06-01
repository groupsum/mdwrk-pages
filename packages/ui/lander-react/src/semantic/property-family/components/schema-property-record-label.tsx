import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRecordLabelProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRecordLabel({ value, description = "The label that issued the release.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRecordLabelProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RecordLabelPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-record-label",
    shellClassName: "lander-semantic--schema-property-record-label",
    title: "recordLabel",
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
