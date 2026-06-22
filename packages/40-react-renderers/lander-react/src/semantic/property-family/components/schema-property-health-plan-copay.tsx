import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HealthPlanCopayPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanCopayProps extends HealthPlanCopayPropertyInput, GeneratedPropertyUiProps<HealthPlanCopayPropertyInput> {}

export function SchemaPropertyHealthPlanCopay({ value: legacyValue, description = "The copay amount.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHealthPlanCopayProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanCopayPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-copay",
    shellClassName: "lander-semantic--schema-property-health-plan-copay",
    title: "healthPlanCopay",
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

(SchemaPropertyHealthPlanCopay as typeof SchemaPropertyHealthPlanCopay & { toStructuredData: (props: SchemaPropertyHealthPlanCopayProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
