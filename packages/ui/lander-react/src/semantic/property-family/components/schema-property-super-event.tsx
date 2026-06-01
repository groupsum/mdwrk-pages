import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySuperEventProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySuperEvent({ value, description = "An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySuperEventProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SuperEventPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-super-event",
    shellClassName: "lander-semantic--schema-property-super-event",
    title: "superEvent",
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
