import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyParticipantProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyParticipant({ value, description = "Other co-agents that participated in the action indirectly. E.g. John wrote a book with *Steve*.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyParticipantProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ParticipantPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-participant",
    shellClassName: "lander-semantic--schema-property-participant",
    title: "participant",
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
