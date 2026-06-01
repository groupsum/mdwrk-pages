import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ApplicationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyApplicationProps extends ApplicationPropertyInput, GeneratedPropertyUiProps<ApplicationPropertyInput> {}

export function SchemaPropertyApplication({ value: legacyValue, description = "An application that can complete the request.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyApplicationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ApplicationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-application",
    shellClassName: "lander-semantic--schema-property-application",
    title: "application",
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
