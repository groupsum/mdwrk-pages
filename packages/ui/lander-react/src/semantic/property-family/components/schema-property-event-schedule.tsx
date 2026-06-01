import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEventScheduleProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEventSchedule({ value, description = "Associates an [[Event]] with a [[Schedule]]. There are circumstances where it is preferable to share a schedule for a series of\n      repeating events rather than data on the individual events themselves. For example, a website or application might prefer to publish a schedule for a weekly\n      gym class rather than provide data on every event. A schedule could be processed by applications to add forthcoming events to a calendar. An [[Event]] that\n      is associated with a [[Schedule]] using this property should not have [[startDate]] or [[endDate]] properties. These are instead defined within the associated\n      [[Schedule]], this avoids any ambiguity for clients using the data. The property might have repeated values to specify different schedules, e.g. for different months\n      or seasons.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEventScheduleProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EventSchedulePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-event-schedule",
    shellClassName: "lander-semantic--schema-property-event-schedule",
    title: "eventSchedule",
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
