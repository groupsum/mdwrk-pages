import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface MedicalProcedureTypeProps extends GeneratedEnumerationProps<string> {}

export function MedicalProcedureType({ value, description = "An enumeration that describes different types of medical procedures.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: MedicalProcedureTypeProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.MedicalProcedureTypeStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-medical-procedure-type",
    shellClassName: "lander-semantic--schema-enumeration-medical-procedure-type",
    title: "MedicalProcedureType",
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

(MedicalProcedureType as typeof MedicalProcedureType & { toStructuredData: (props: MedicalProcedureTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
