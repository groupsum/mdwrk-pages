import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface PhysicalExamProps extends GeneratedEnumerationProps<string> {}

export function PhysicalExam({ value, description = "A type of physical examination of a patient performed by a physician. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: PhysicalExamProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.PhysicalExamStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-physical-exam",
    shellClassName: "lander-semantic--schema-enumeration-physical-exam",
    title: "PhysicalExam",
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
