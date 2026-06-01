import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReturnPolicySeasonalOverridePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReturnPolicySeasonalOverrideProps extends ReturnPolicySeasonalOverridePropertyInput, GeneratedPropertyUiProps<ReturnPolicySeasonalOverridePropertyInput> {}

export function SchemaPropertyReturnPolicySeasonalOverride({ value: legacyValue, description = "Seasonal override of a return policy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReturnPolicySeasonalOverrideProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReturnPolicySeasonalOverridePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-return-policy-seasonal-override",
    shellClassName: "lander-semantic--schema-property-return-policy-seasonal-override",
    title: "returnPolicySeasonalOverride",
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
