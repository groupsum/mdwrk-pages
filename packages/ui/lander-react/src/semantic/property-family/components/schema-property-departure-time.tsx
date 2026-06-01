import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DepartureTimePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDepartureTimeProps extends DepartureTimePropertyInput, GeneratedPropertyUiProps<DepartureTimePropertyInput> {}

export function SchemaPropertyDepartureTime({ value: legacyValue, description = "The expected departure time.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDepartureTimeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DepartureTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-departure-time",
    shellClassName: "lander-semantic--schema-property-departure-time",
    title: "departureTime",
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
