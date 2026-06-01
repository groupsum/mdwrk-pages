import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyJobTitleProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyJobTitle({ value, description = "The job title of the person (for example, Financial Manager).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyJobTitleProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.JobTitlePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-job-title",
    shellClassName: "lander-semantic--schema-property-job-title",
    title: "jobTitle",
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
