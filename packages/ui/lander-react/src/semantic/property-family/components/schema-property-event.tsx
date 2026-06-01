import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEventProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEvent({ value, description = "Upcoming or past event associated with this place, organization, or action.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEventProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EventPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-event",
    shellClassName: "lander-semantic--schema-property-event",
    title: "event",
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
