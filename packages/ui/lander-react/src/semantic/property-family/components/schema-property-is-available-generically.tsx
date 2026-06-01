import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsAvailableGenericallyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsAvailableGenerically({ value, description = "True if the drug is available in a generic form (regardless of name).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsAvailableGenericallyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsAvailableGenericallyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-available-generically",
    shellClassName: "lander-semantic--schema-property-is-available-generically",
    title: "isAvailableGenerically",
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
