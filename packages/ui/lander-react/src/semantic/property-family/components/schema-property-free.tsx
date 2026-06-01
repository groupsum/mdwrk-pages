import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFreeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFree({ value, description = "A flag to signal that the item, event, or place is accessible for free.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFreeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FreePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-free",
    shellClassName: "lander-semantic--schema-property-free",
    title: "free",
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
