import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReturnMethodProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReturnMethod({ value, description = "The type of return method offered, specified from an enumeration.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReturnMethodProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReturnMethodPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-return-method",
    shellClassName: "lander-semantic--schema-property-return-method",
    title: "returnMethod",
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
