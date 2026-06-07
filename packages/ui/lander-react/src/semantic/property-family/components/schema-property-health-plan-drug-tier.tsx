import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HealthPlanDrugTierPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanDrugTierProps extends HealthPlanDrugTierPropertyInput, GeneratedPropertyUiProps<HealthPlanDrugTierPropertyInput> {}

export function SchemaPropertyHealthPlanDrugTier({ value: legacyValue, description = "The tier(s) of drugs offered by this formulary or insurance plan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHealthPlanDrugTierProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanDrugTierPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-drug-tier",
    shellClassName: "lander-semantic--schema-property-health-plan-drug-tier",
    title: "healthPlanDrugTier",
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

(SchemaPropertyHealthPlanDrugTier as typeof SchemaPropertyHealthPlanDrugTier & { toStructuredData: (props: SchemaPropertyHealthPlanDrugTierProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
