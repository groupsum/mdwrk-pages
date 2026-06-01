import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HealthPlanPharmacyCategoryPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanPharmacyCategoryProps extends HealthPlanPharmacyCategoryPropertyInput, GeneratedPropertyUiProps<HealthPlanPharmacyCategoryPropertyInput> {}

export function SchemaPropertyHealthPlanPharmacyCategory({ value: legacyValue, description = "The category or type of pharmacy associated with this cost sharing.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHealthPlanPharmacyCategoryProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanPharmacyCategoryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-pharmacy-category",
    shellClassName: "lander-semantic--schema-property-health-plan-pharmacy-category",
    title: "healthPlanPharmacyCategory",
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
