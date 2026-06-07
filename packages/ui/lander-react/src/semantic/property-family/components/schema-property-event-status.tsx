import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EventStatusPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEventStatusProps extends EventStatusPropertyInput, GeneratedPropertyUiProps<EventStatusPropertyInput> {}

export function SchemaPropertyEventStatus({ value: legacyValue, description = "An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEventStatusProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EventStatusPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-event-status",
    shellClassName: "lander-semantic--schema-property-event-status",
    title: "eventStatus",
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

(SchemaPropertyEventStatus as typeof SchemaPropertyEventStatus & { toStructuredData: (props: SchemaPropertyEventStatusProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
