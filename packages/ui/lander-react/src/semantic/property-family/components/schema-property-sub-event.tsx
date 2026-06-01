import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SubEventPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySubEventProps extends SubEventPropertyInput, GeneratedPropertyUiProps<SubEventPropertyInput> {}

export function SchemaPropertySubEvent({ value: legacyValue, description = "An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySubEventProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SubEventPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sub-event",
    shellClassName: "lander-semantic--schema-property-sub-event",
    title: "subEvent",
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
