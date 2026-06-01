import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InCodeSetPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInCodeSetProps extends InCodeSetPropertyInput, GeneratedPropertyUiProps<InCodeSetPropertyInput> {}

export function SchemaPropertyInCodeSet({ value: legacyValue, description = "A [[CategoryCodeSet]] that contains this category code.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInCodeSetProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InCodeSetPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-in-code-set",
    shellClassName: "lander-semantic--schema-property-in-code-set",
    title: "inCodeSet",
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
