import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RecordedInPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRecordedInProps extends RecordedInPropertyInput, GeneratedPropertyUiProps<RecordedInPropertyInput> {}

export function SchemaPropertyRecordedIn({ value: legacyValue, description = "The CreativeWork that captured all or part of this Event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRecordedInProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RecordedInPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-recorded-in",
    shellClassName: "lander-semantic--schema-property-recorded-in",
    title: "recordedIn",
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

(SchemaPropertyRecordedIn as typeof SchemaPropertyRecordedIn & { toStructuredData: (props: SchemaPropertyRecordedInProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
