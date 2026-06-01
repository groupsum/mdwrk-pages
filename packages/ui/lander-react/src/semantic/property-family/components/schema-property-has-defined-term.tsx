import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasDefinedTermPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasDefinedTermProps extends HasDefinedTermPropertyInput, GeneratedPropertyUiProps<HasDefinedTermPropertyInput> {}

export function SchemaPropertyHasDefinedTerm({ value: legacyValue, description = "A Defined Term contained in this term set.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasDefinedTermProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasDefinedTermPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-defined-term",
    shellClassName: "lander-semantic--schema-property-has-defined-term",
    title: "hasDefinedTerm",
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
