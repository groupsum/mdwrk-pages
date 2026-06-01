import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCorrectionsPolicyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCorrectionsPolicy({ value, description = "For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCorrectionsPolicyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CorrectionsPolicyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-corrections-policy",
    shellClassName: "lander-semantic--schema-property-corrections-policy",
    title: "correctionsPolicy",
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
