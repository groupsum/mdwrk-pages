import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ServiceAreaPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServiceAreaProps extends ServiceAreaPropertyInput, GeneratedPropertyUiProps<ServiceAreaPropertyInput> {}

export function SchemaPropertyServiceArea({ value: legacyValue, description = "The geographic area where the service is provided.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyServiceAreaProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ServiceAreaPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-service-area",
    shellClassName: "lander-semantic--schema-property-service-area",
    title: "serviceArea",
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
