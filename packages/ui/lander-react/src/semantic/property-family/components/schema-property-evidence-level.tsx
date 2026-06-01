import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EvidenceLevelPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEvidenceLevelProps extends EvidenceLevelPropertyInput, GeneratedPropertyUiProps<EvidenceLevelPropertyInput> {}

export function SchemaPropertyEvidenceLevel({ value: legacyValue, description = "Strength of evidence of the data used to formulate the guideline (enumerated).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEvidenceLevelProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EvidenceLevelPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-evidence-level",
    shellClassName: "lander-semantic--schema-property-evidence-level",
    title: "evidenceLevel",
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
