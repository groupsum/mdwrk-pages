import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTranscriptProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTranscript({ value, description = "If this MediaObject is an AudioObject or VideoObject, the transcript of that object.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTranscriptProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TranscriptPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-transcript",
    shellClassName: "lander-semantic--schema-property-transcript",
    title: "transcript",
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
