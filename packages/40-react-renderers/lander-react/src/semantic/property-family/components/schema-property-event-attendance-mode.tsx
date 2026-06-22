import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EventAttendanceModePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEventAttendanceModeProps extends EventAttendanceModePropertyInput, GeneratedPropertyUiProps<EventAttendanceModePropertyInput> {}

export function SchemaPropertyEventAttendanceMode({ value: legacyValue, description = "The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEventAttendanceModeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EventAttendanceModePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-event-attendance-mode",
    shellClassName: "lander-semantic--schema-property-event-attendance-mode",
    title: "eventAttendanceMode",
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

(SchemaPropertyEventAttendanceMode as typeof SchemaPropertyEventAttendanceMode & { toStructuredData: (props: SchemaPropertyEventAttendanceModeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
