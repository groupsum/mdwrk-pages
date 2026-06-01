import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { StudySubjectPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStudySubjectProps extends StudySubjectPropertyInput, GeneratedPropertyUiProps<StudySubjectPropertyInput> {}

export function SchemaPropertyStudySubject({ value: legacyValue, description = "A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyStudySubjectProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StudySubjectPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-study-subject",
    shellClassName: "lander-semantic--schema-property-study-subject",
    title: "studySubject",
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
