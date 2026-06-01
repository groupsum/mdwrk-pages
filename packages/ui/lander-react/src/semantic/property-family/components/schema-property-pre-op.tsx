import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PreOpPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPreOpProps extends PreOpPropertyInput, GeneratedPropertyUiProps<PreOpPropertyInput> {}

export function SchemaPropertyPreOp({ value: legacyValue, description = "A description of the workup, testing, and other preparations required before implanting this device.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPreOpProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
