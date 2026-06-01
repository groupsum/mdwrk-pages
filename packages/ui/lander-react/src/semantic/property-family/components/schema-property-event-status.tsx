import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEventStatusProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEventStatus({ value, description = "An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEventStatusProps) {
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
