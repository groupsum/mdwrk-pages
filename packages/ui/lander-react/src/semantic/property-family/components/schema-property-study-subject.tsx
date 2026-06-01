import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStudySubjectProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyStudySubject({ value, description = "A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyStudySubjectProps) {
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
