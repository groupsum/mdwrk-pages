import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ApplicableLocationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyApplicableLocationProps extends ApplicableLocationPropertyInput, GeneratedPropertyUiProps<ApplicableLocationPropertyInput> {}

export function SchemaPropertyApplicableLocation({ value: legacyValue, description = "The location in which the status applies.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyApplicableLocationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ApplicableLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-applicable-location",
    shellClassName: "lander-semantic--schema-property-applicable-location",
    title: "applicableLocation",
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
