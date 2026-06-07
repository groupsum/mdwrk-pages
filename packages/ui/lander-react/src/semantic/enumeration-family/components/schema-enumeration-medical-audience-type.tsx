import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface MedicalAudienceTypeProps extends GeneratedEnumerationProps<string> {}

export function MedicalAudienceType({ value, description = "Target audiences types for medical web pages. Enumerated type.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: MedicalAudienceTypeProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.MedicalAudienceTypeStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-medical-audience-type",
    shellClassName: "lander-semantic--schema-enumeration-medical-audience-type",
    title: "MedicalAudienceType",
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

(MedicalAudienceType as typeof MedicalAudienceType & { toStructuredData: (props: MedicalAudienceTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
