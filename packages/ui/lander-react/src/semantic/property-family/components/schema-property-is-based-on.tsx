import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsBasedOnProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsBasedOn({ value, description = "A resource from which this work is derived or from which it is a modification or adaptation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsBasedOnProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsBasedOnPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-based-on",
    shellClassName: "lander-semantic--schema-property-is-based-on",
    title: "isBasedOn",
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
