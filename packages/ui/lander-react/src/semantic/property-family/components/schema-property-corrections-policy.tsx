import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CorrectionsPolicyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCorrectionsPolicyProps extends CorrectionsPolicyPropertyInput, GeneratedPropertyUiProps<CorrectionsPolicyPropertyInput> {}

export function SchemaPropertyCorrectionsPolicy({ value: legacyValue, description = "For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCorrectionsPolicyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CorrectionsPolicyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-corrections-policy",
    shellClassName: "lander-semantic--schema-property-corrections-policy",
    title: "correctionsPolicy",
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
