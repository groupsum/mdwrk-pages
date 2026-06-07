import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface EventAttendanceModeEnumerationProps extends GeneratedEnumerationProps<string> {}

export function EventAttendanceModeEnumeration({ value, description = "An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: EventAttendanceModeEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.EventAttendanceModeEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-event-attendance-mode-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-event-attendance-mode-enumeration",
    title: "EventAttendanceModeEnumeration",
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

(EventAttendanceModeEnumeration as typeof EventAttendanceModeEnumeration & { toStructuredData: (props: EventAttendanceModeEnumerationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
