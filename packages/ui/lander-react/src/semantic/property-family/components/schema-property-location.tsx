import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLocationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLocation({ value, description = "The location of, for example, where an event is happening, where an organization is located, or where an action takes place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLocationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-location",
    shellClassName: "lander-semantic--schema-property-location",
    title: "location",
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
