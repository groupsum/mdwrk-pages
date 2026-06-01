import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DifferentialDiagnosisPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDifferentialDiagnosisProps extends DifferentialDiagnosisPropertyInput, GeneratedPropertyUiProps<DifferentialDiagnosisPropertyInput> {}

export function SchemaPropertyDifferentialDiagnosis({ value: legacyValue, description = "One of a set of differential diagnoses for the condition. Specifically, a closely-related or competing diagnosis typically considered later in the cognitive process whereby this medical condition is distinguished from others most likely responsible for a similar collection of signs and symptoms to reach the most parsimonious diagnosis or diagnoses in a patient.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDifferentialDiagnosisProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DifferentialDiagnosisPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-differential-diagnosis",
    shellClassName: "lander-semantic--schema-property-differential-diagnosis",
    title: "differentialDiagnosis",
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
