import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EventSchedulePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEventScheduleProps extends EventSchedulePropertyInput, GeneratedPropertyUiProps<EventSchedulePropertyInput> {}

export function SchemaPropertyEventSchedule({ value: legacyValue, description = "Associates an [[Event]] with a [[Schedule]]. There are circumstances where it is preferable to share a schedule for a series of\n      repeating events rather than data on the individual events themselves. For example, a website or application might prefer to publish a schedule for a weekly\n      gym class rather than provide data on every event. A schedule could be processed by applications to add forthcoming events to a calendar. An [[Event]] that\n      is associated with a [[Schedule]] using this property should not have [[startDate]] or [[endDate]] properties. These are instead defined within the associated\n      [[Schedule]], this avoids any ambiguity for clients using the data. The property might have repeated values to specify different schedules, e.g. for different months\n      or seasons.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEventScheduleProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyEventSchedule as typeof SchemaPropertyEventSchedule & { toStructuredData: (props: SchemaPropertyEventScheduleProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
