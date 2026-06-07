import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface MedicalSpecialtyProps extends GeneratedEnumerationProps<string> {}

export function MedicalSpecialty({ value, description = "Any specific branch of medical science or practice. Medical specialities include clinical specialties that pertain to particular organ systems and their respective disease states, as well as allied health specialties. Enumerated type.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: MedicalSpecialtyProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.MedicalSpecialtyStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-medical-specialty",
    shellClassName: "lander-semantic--schema-enumeration-medical-specialty",
    title: "MedicalSpecialty",
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

(MedicalSpecialty as typeof MedicalSpecialty & { toStructuredData: (props: MedicalSpecialtyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
