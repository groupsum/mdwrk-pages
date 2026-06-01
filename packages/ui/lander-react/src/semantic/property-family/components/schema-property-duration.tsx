import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DurationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDurationProps extends DurationPropertyInput, GeneratedPropertyUiProps<DurationPropertyInput> {}

export function SchemaPropertyDuration({ value: legacyValue, description = "The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDurationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DurationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-duration",
    shellClassName: "lander-semantic--schema-property-duration",
    title: "duration",
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
