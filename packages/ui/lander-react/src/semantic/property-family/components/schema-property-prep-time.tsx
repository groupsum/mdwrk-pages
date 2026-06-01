import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrepTimeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPrepTime({ value, description = "The length of time it takes to prepare the items to be used in instructions or a direction, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPrepTimeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PrepTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-prep-time",
    shellClassName: "lander-semantic--schema-property-prep-time",
    title: "prepTime",
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
