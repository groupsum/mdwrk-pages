import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPreviousStartDateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPreviousStartDate({ value, description = "Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPreviousStartDateProps) {
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
