import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FiberContentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFiberContentProps extends FiberContentPropertyInput, GeneratedPropertyUiProps<FiberContentPropertyInput> {}

export function SchemaPropertyFiberContent({ value: legacyValue, description = "The number of grams of fiber.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFiberContentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FiberContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-fiber-content",
    shellClassName: "lander-semantic--schema-property-fiber-content",
    title: "fiberContent",
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
