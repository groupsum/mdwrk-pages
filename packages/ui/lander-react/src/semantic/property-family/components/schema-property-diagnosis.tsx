import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DiagnosisPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDiagnosisProps extends DiagnosisPropertyInput, GeneratedPropertyUiProps<DiagnosisPropertyInput> {}

export function SchemaPropertyDiagnosis({ value: legacyValue, description = "One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDiagnosisProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DiagnosisPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-diagnosis",
    shellClassName: "lander-semantic--schema-property-diagnosis",
    title: "diagnosis",
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
