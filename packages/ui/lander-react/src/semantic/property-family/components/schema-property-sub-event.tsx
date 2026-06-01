import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySubEventProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySubEvent({ value, description = "An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySubEventProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SubEventPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sub-event",
    shellClassName: "lander-semantic--schema-property-sub-event",
    title: "subEvent",
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
