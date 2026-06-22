import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AttendeePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAttendeeProps extends AttendeePropertyInput, GeneratedPropertyUiProps<AttendeePropertyInput> {}

export function SchemaPropertyAttendee({ value: legacyValue, description = "A person or organization attending the event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAttendeeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AttendeePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-attendee",
    shellClassName: "lander-semantic--schema-property-attendee",
    title: "attendee",
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

(SchemaPropertyAttendee as typeof SchemaPropertyAttendee & { toStructuredData: (props: SchemaPropertyAttendeeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
