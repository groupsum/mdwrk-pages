import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGuidelineSubjectProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGuidelineSubject({ value, description = "The medical conditions, treatments, etc. that are the subject of the guideline.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGuidelineSubjectProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GuidelineSubjectPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-guideline-subject",
    shellClassName: "lander-semantic--schema-property-guideline-subject",
    title: "guidelineSubject",
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
