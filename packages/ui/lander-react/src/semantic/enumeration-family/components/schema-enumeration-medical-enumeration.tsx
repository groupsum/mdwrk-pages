import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface MedicalEnumerationProps extends GeneratedEnumerationProps<string> {}

export function MedicalEnumeration({ value, description = "Enumerations related to health and the practice of medicine: A concept that is used to attribute a quality to another concept, as a qualifier, a collection of items or a listing of all of the elements of a set in medicine practice.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: MedicalEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.MedicalEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-medical-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-medical-enumeration",
    title: "MedicalEnumeration",
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

(MedicalEnumeration as typeof MedicalEnumeration & { toStructuredData: (props: MedicalEnumerationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
