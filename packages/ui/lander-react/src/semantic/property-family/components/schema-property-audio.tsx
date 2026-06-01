import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAudioProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAudio({ value, description = "An embedded audio object.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAudioProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AudioPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-audio",
    shellClassName: "lander-semantic--schema-property-audio",
    title: "audio",
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
