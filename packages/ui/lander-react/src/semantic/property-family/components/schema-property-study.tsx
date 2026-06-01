import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStudyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyStudy({ value, description = "A medical study or trial related to this entity.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyStudyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StudyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-study",
    shellClassName: "lander-semantic--schema-property-study",
    title: "study",
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
