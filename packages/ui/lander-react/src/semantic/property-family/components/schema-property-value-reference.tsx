import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyValueReferenceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyValueReference({ value, description = "A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyValueReferenceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ValueReferencePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-value-reference",
    shellClassName: "lander-semantic--schema-property-value-reference",
    title: "valueReference",
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
