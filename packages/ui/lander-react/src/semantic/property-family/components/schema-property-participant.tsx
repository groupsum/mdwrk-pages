import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ParticipantPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyParticipantProps extends ParticipantPropertyInput, GeneratedPropertyUiProps<ParticipantPropertyInput> {}

export function SchemaPropertyParticipant({ value: legacyValue, description = "Other co-agents that participated in the action indirectly. E.g. John wrote a book with *Steve*.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyParticipantProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyParticipant as typeof SchemaPropertyParticipant & { toStructuredData: (props: SchemaPropertyParticipantProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
