import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface MedicalEvidenceLevelProps extends GeneratedEnumerationProps<string> {}

export function MedicalEvidenceLevel({ value, description = "Level of evidence for a medical guideline. Enumerated type.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: MedicalEvidenceLevelProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.MedicalEvidenceLevelStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-medical-evidence-level",
    shellClassName: "lander-semantic--schema-enumeration-medical-evidence-level",
    title: "MedicalEvidenceLevel",
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
