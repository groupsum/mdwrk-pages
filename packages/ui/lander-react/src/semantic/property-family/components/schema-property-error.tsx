import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ErrorPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyErrorProps extends ErrorPropertyInput, GeneratedPropertyUiProps<ErrorPropertyInput> {}

export function SchemaPropertyError({ value: legacyValue, description = "For failed actions, more information on the cause of the failure. Consider using the Error type.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyErrorProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ErrorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-error",
    shellClassName: "lander-semantic--schema-property-error",
    title: "error",
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
