import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RecordedAtPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRecordedAtProps extends RecordedAtPropertyInput, GeneratedPropertyUiProps<RecordedAtPropertyInput> {}

export function SchemaPropertyRecordedAt({ value: legacyValue, description = "The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRecordedAtProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyRecordedAt as typeof SchemaPropertyRecordedAt & { toStructuredData: (props: SchemaPropertyRecordedAtProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
