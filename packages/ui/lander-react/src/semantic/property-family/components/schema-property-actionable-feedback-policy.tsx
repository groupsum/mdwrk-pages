import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyActionableFeedbackPolicyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyActionableFeedbackPolicy({ value, description = "For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyActionableFeedbackPolicyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ActionableFeedbackPolicyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-actionable-feedback-policy",
    shellClassName: "lander-semantic--schema-property-actionable-feedback-policy",
    title: "actionableFeedbackPolicy",
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
