import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface MedicalStudyStatusProps extends GeneratedEnumerationProps<string> {}

export function MedicalStudyStatus({ value, description = "The status of a medical study. Enumerated type.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: MedicalStudyStatusProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.MedicalStudyStatusStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-medical-study-status",
    shellClassName: "lander-semantic--schema-enumeration-medical-study-status",
    title: "MedicalStudyStatus",
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
