import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasDriveThroughServicePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasDriveThroughServiceProps extends HasDriveThroughServicePropertyInput, GeneratedPropertyUiProps<HasDriveThroughServicePropertyInput> {}

export function SchemaPropertyHasDriveThroughService({ value: legacyValue, description = "Indicates whether some facility (e.g. [[FoodEstablishment]], [[CovidTestingFacility]]) offers a service that can be used by driving through in a car. In the case of [[CovidTestingFacility]] such facilities could potentially help with social distancing from other potentially-infected users.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasDriveThroughServiceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasDriveThroughServicePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-drive-through-service",
    shellClassName: "lander-semantic--schema-property-has-drive-through-service",
    title: "hasDriveThroughService",
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

(SchemaPropertyHasDriveThroughService as typeof SchemaPropertyHasDriveThroughService & { toStructuredData: (props: SchemaPropertyHasDriveThroughServiceProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
