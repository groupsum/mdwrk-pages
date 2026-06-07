import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FrequencyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFrequencyProps extends FrequencyPropertyInput, GeneratedPropertyUiProps<FrequencyPropertyInput> {}

export function SchemaPropertyFrequency({ value: legacyValue, description = "How often the dose is taken, e.g. 'daily'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFrequencyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FrequencyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-frequency",
    shellClassName: "lander-semantic--schema-property-frequency",
    title: "frequency",
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

(SchemaPropertyFrequency as typeof SchemaPropertyFrequency & { toStructuredData: (props: SchemaPropertyFrequencyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
