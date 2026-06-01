import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PreviousStartDatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPreviousStartDateProps extends PreviousStartDatePropertyInput, GeneratedPropertyUiProps<PreviousStartDatePropertyInput> {}

export function SchemaPropertyPreviousStartDate({ value: legacyValue, description = "Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPreviousStartDateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PreviousStartDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-previous-start-date",
    shellClassName: "lander-semantic--schema-property-previous-start-date",
    title: "previousStartDate",
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
