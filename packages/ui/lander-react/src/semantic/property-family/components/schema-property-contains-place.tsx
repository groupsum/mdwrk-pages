import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ContainsPlacePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContainsPlaceProps extends ContainsPlacePropertyInput, GeneratedPropertyUiProps<ContainsPlacePropertyInput> {}

export function SchemaPropertyContainsPlace({ value: legacyValue, description = "The basic containment relation between a place and another that it contains.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyContainsPlaceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContainsPlacePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contains-place",
    shellClassName: "lander-semantic--schema-property-contains-place",
    title: "containsPlace",
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
