import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RepeatFrequencyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRepeatFrequencyProps extends RepeatFrequencyPropertyInput, GeneratedPropertyUiProps<RepeatFrequencyPropertyInput> {}

export function SchemaPropertyRepeatFrequency({ value: legacyValue, description = "Defines the frequency at which [[Event]]s will occur according to a schedule [[Schedule]]. The intervals between\n      events should be defined as a [[Duration]] of time.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRepeatFrequencyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RepeatFrequencyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-repeat-frequency",
    shellClassName: "lander-semantic--schema-property-repeat-frequency",
    title: "repeatFrequency",
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
