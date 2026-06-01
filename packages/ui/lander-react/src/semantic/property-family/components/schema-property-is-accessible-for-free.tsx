import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsAccessibleForFreeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsAccessibleForFree({ value, description = "A flag to signal that the item, event, or place is accessible for free.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsAccessibleForFreeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsAccessibleForFreePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-accessible-for-free",
    shellClassName: "lander-semantic--schema-property-is-accessible-for-free",
    title: "isAccessibleForFree",
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
