import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRecordedAtProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRecordedAt({ value, description = "The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRecordedAtProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RecordedAtPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-recorded-at",
    shellClassName: "lander-semantic--schema-property-recorded-at",
    title: "recordedAt",
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
