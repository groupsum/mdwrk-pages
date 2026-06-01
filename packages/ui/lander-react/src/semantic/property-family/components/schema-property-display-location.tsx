import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDisplayLocationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDisplayLocation({ value, description = "The location at which an item can be viewed or experienced in-person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDisplayLocationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DisplayLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-display-location",
    shellClassName: "lander-semantic--schema-property-display-location",
    title: "displayLocation",
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
