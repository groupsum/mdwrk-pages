import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RecordingOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRecordingOfProps extends RecordingOfPropertyInput, GeneratedPropertyUiProps<RecordingOfPropertyInput> {}

export function SchemaPropertyRecordingOf({ value: legacyValue, description = "The composition this track is a recording of.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRecordingOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyRecordingOf as typeof SchemaPropertyRecordingOf & { toStructuredData: (props: SchemaPropertyRecordingOfProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
