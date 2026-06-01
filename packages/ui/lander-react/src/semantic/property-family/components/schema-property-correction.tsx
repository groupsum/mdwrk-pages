import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CorrectionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCorrectionProps extends CorrectionPropertyInput, GeneratedPropertyUiProps<CorrectionPropertyInput> {}

export function SchemaPropertyCorrection({ value: legacyValue, description = "Indicates a correction to a [[CreativeWork]], either via a [[CorrectionComment]], textually or in another document.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCorrectionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CorrectionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-correction",
    shellClassName: "lander-semantic--schema-property-correction",
    title: "correction",
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
