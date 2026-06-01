import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStudyLocationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyStudyLocation({ value, description = "The location in which the study is taking/took place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyStudyLocationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StudyLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-study-location",
    shellClassName: "lander-semantic--schema-property-study-location",
    title: "studyLocation",
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
