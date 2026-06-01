import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ParentServicePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyParentServiceProps extends ParentServicePropertyInput, GeneratedPropertyUiProps<ParentServicePropertyInput> {}

export function SchemaPropertyParentService({ value: legacyValue, description = "A broadcast service to which the broadcast service may belong to such as regional variations of a national channel.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyParentServiceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ParentServicePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-parent-service",
    shellClassName: "lander-semantic--schema-property-parent-service",
    title: "parentService",
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
