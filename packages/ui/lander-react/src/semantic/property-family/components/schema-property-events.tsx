import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEventsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEvents({ value, description = "Upcoming or past events associated with this place or organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEventsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EventsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-events",
    shellClassName: "lander-semantic--schema-property-events",
    title: "events",
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
