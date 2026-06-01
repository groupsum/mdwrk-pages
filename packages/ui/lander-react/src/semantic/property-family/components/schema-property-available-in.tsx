import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailableInProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAvailableIn({ value, description = "The location in which the strength is available.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAvailableInProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AvailableInPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-available-in",
    shellClassName: "lander-semantic--schema-property-available-in",
    title: "availableIn",
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
