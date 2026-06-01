import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPreOpProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPreOp({ value, description = "A description of the workup, testing, and other preparations required before implanting this device.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPreOpProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PreOpPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-pre-op",
    shellClassName: "lander-semantic--schema-property-pre-op",
    title: "preOp",
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
