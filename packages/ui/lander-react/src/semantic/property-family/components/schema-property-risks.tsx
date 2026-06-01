import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RisksPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRisksProps extends RisksPropertyInput, GeneratedPropertyUiProps<RisksPropertyInput> {}

export function SchemaPropertyRisks({ value: legacyValue, description = "Specific physiologic risks associated to the diet plan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRisksProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RisksPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-risks",
    shellClassName: "lander-semantic--schema-property-risks",
    title: "risks",
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
