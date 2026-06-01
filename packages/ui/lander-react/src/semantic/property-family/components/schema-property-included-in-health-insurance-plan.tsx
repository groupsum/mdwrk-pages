import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IncludedInHealthInsurancePlanPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIncludedInHealthInsurancePlanProps extends IncludedInHealthInsurancePlanPropertyInput, GeneratedPropertyUiProps<IncludedInHealthInsurancePlanPropertyInput> {}

export function SchemaPropertyIncludedInHealthInsurancePlan({ value: legacyValue, description = "The insurance plans that cover this drug.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIncludedInHealthInsurancePlanProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IncludedInHealthInsurancePlanPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-included-in-health-insurance-plan",
    shellClassName: "lander-semantic--schema-property-included-in-health-insurance-plan",
    title: "includedInHealthInsurancePlan",
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
