import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AreaServedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAreaServedProps extends AreaServedPropertyInput, GeneratedPropertyUiProps<AreaServedPropertyInput> {}

export function SchemaPropertyAreaServed({ value: legacyValue, description = "The geographic area where a service or offered item is provided.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAreaServedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AreaServedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-area-served",
    shellClassName: "lander-semantic--schema-property-area-served",
    title: "areaServed",
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
