import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySubjectOfProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySubjectOf({ value, description = "A CreativeWork or Event about this Thing.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySubjectOfProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SubjectOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-subject-of",
    shellClassName: "lander-semantic--schema-property-subject-of",
    title: "subjectOf",
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
