import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HomeLocationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHomeLocationProps extends HomeLocationPropertyInput, GeneratedPropertyUiProps<HomeLocationPropertyInput> {}

export function SchemaPropertyHomeLocation({ value: legacyValue, description = "A contact location for a person's residence.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHomeLocationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HomeLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-home-location",
    shellClassName: "lander-semantic--schema-property-home-location",
    title: "homeLocation",
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
