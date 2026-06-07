import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RecordLabelPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRecordLabelProps extends RecordLabelPropertyInput, GeneratedPropertyUiProps<RecordLabelPropertyInput> {}

export function SchemaPropertyRecordLabel({ value: legacyValue, description = "The label that issued the release.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRecordLabelProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyRecordLabel as typeof SchemaPropertyRecordLabel & { toStructuredData: (props: SchemaPropertyRecordLabelProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
