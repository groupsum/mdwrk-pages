import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SiblingsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySiblingsProps extends SiblingsPropertyInput, GeneratedPropertyUiProps<SiblingsPropertyInput> {}

export function SchemaPropertySiblings({ value: legacyValue, description = "A sibling of the person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySiblingsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SiblingsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-siblings",
    shellClassName: "lander-semantic--schema-property-siblings",
    title: "siblings",
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
