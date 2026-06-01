import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ParentsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyParentsProps extends ParentsPropertyInput, GeneratedPropertyUiProps<ParentsPropertyInput> {}

export function SchemaPropertyParents({ value: legacyValue, description = "A parents of the person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyParentsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ParentsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-parents",
    shellClassName: "lander-semantic--schema-property-parents",
    title: "parents",
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
