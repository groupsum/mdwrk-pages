import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IncludesHealthPlanFormularyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIncludesHealthPlanFormularyProps extends IncludesHealthPlanFormularyPropertyInput, GeneratedPropertyUiProps<IncludesHealthPlanFormularyPropertyInput> {}

export function SchemaPropertyIncludesHealthPlanFormulary({ value: legacyValue, description = "Formularies covered by this plan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIncludesHealthPlanFormularyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IncludesHealthPlanFormularyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-includes-health-plan-formulary",
    shellClassName: "lander-semantic--schema-property-includes-health-plan-formulary",
    title: "includesHealthPlanFormulary",
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
