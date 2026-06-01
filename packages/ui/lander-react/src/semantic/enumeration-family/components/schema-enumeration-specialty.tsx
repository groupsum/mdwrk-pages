import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface SpecialtyProps extends GeneratedEnumerationProps<string> {}

export function Specialty({ value, description = "Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SpecialtyProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.SpecialtyStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-specialty",
    shellClassName: "lander-semantic--schema-enumeration-specialty",
    title: "Specialty",
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
