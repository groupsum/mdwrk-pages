import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EligibleDurationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEligibleDurationProps extends EligibleDurationPropertyInput, GeneratedPropertyUiProps<EligibleDurationPropertyInput> {}

export function SchemaPropertyEligibleDuration({ value: legacyValue, description = "The duration for which the given offer is valid.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEligibleDurationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EligibleDurationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-eligible-duration",
    shellClassName: "lander-semantic--schema-property-eligible-duration",
    title: "eligibleDuration",
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
