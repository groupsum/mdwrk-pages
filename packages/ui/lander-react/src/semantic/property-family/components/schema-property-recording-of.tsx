import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRecordingOfProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRecordingOf({ value, description = "The composition this track is a recording of.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRecordingOfProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RecordingOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-recording-of",
    shellClassName: "lander-semantic--schema-property-recording-of",
    title: "recordingOf",
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
