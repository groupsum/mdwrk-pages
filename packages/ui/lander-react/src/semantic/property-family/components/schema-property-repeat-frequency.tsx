import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRepeatFrequencyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRepeatFrequency({ value, description = "Defines the frequency at which [[Event]]s will occur according to a schedule [[Schedule]]. The intervals between\n      events should be defined as a [[Duration]] of time.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRepeatFrequencyProps) {
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
