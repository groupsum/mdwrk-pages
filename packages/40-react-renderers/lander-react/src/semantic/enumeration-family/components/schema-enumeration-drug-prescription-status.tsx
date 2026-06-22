import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface DrugPrescriptionStatusProps extends GeneratedEnumerationProps<string> {}

export function DrugPrescriptionStatus({ value, description = "Indicates whether this drug is available by prescription or over-the-counter.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: DrugPrescriptionStatusProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.DrugPrescriptionStatusStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-drug-prescription-status",
    shellClassName: "lander-semantic--schema-enumeration-drug-prescription-status",
    title: "DrugPrescriptionStatus",
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

(DrugPrescriptionStatus as typeof DrugPrescriptionStatus & { toStructuredData: (props: DrugPrescriptionStatusProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
