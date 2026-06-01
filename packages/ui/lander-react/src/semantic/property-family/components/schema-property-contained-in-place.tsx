import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ContainedInPlacePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContainedInPlaceProps extends ContainedInPlacePropertyInput, GeneratedPropertyUiProps<ContainedInPlacePropertyInput> {}

export function SchemaPropertyContainedInPlace({ value: legacyValue, description = "The basic containment relation between a place and one that contains it.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyContainedInPlaceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContainedInPlacePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contained-in-place",
    shellClassName: "lander-semantic--schema-property-contained-in-place",
    title: "containedInPlace",
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
