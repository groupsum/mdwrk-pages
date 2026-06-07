import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RequiredMaxAgePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRequiredMaxAgeProps extends RequiredMaxAgePropertyInput, GeneratedPropertyUiProps<RequiredMaxAgePropertyInput> {}

export function SchemaPropertyRequiredMaxAge({ value: legacyValue, description = "Audiences defined by a person's maximum age.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRequiredMaxAgeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RequiredMaxAgePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-required-max-age",
    shellClassName: "lander-semantic--schema-property-required-max-age",
    title: "requiredMaxAge",
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

(SchemaPropertyRequiredMaxAge as typeof SchemaPropertyRequiredMaxAge & { toStructuredData: (props: SchemaPropertyRequiredMaxAgeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
