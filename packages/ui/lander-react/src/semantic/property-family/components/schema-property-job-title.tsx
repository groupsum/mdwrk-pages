import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { JobTitlePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyJobTitleProps extends JobTitlePropertyInput, GeneratedPropertyUiProps<JobTitlePropertyInput> {}

export function SchemaPropertyJobTitle({ value: legacyValue, description = "The job title of the person (for example, Financial Manager).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyJobTitleProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
