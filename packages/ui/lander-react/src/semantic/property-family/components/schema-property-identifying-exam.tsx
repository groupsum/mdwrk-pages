import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIdentifyingExamProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIdentifyingExam({ value, description = "A physical examination that can identify this sign.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIdentifyingExamProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IdentifyingExamPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-identifying-exam",
    shellClassName: "lander-semantic--schema-property-identifying-exam",
    title: "identifyingExam",
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
