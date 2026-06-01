import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEvidenceLevelProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEvidenceLevel({ value, description = "Strength of evidence of the data used to formulate the guideline (enumerated).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEvidenceLevelProps) {
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
