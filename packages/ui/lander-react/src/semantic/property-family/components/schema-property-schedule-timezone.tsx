import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ScheduleTimezonePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyScheduleTimezoneProps extends ScheduleTimezonePropertyInput, GeneratedPropertyUiProps<ScheduleTimezonePropertyInput> {}

export function SchemaPropertyScheduleTimezone({ value: legacyValue, description = "Indicates the timezone for which the time(s) indicated in the [[Schedule]] are given. The value provided should be among those listed in the IANA Time Zone Database.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyScheduleTimezoneProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ScheduleTimezonePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-schedule-timezone",
    shellClassName: "lander-semantic--schema-property-schedule-timezone",
    title: "scheduleTimezone",
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

(SchemaPropertyScheduleTimezone as typeof SchemaPropertyScheduleTimezone & { toStructuredData: (props: SchemaPropertyScheduleTimezoneProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
