import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReleasedEventPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReleasedEventProps extends ReleasedEventPropertyInput, GeneratedPropertyUiProps<ReleasedEventPropertyInput> {}

export function SchemaPropertyReleasedEvent({ value: legacyValue, description = "The place and time the release was issued, expressed as a PublicationEvent.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReleasedEventProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReleasedEventPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-released-event",
    shellClassName: "lander-semantic--schema-property-released-event",
    title: "releasedEvent",
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
