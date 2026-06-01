import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LocationCreatedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLocationCreatedProps extends LocationCreatedPropertyInput, GeneratedPropertyUiProps<LocationCreatedPropertyInput> {}

export function SchemaPropertyLocationCreated({ value: legacyValue, description = "The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLocationCreatedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LocationCreatedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-location-created",
    shellClassName: "lander-semantic--schema-property-location-created",
    title: "locationCreated",
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
