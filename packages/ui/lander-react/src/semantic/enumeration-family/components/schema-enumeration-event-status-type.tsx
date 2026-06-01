import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface EventStatusTypeProps extends GeneratedEnumerationProps<string> {}

export function EventStatusType({ value, description = "EventStatusType is an enumeration type whose instances represent several states that an Event may be in.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: EventStatusTypeProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.EventStatusTypeStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-event-status-type",
    shellClassName: "lander-semantic--schema-enumeration-event-status-type",
    title: "EventStatusType",
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
