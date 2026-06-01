import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySubEventsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySubEvents({ value, description = "Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySubEventsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SubEventsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sub-events",
    shellClassName: "lander-semantic--schema-property-sub-events",
    title: "subEvents",
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
