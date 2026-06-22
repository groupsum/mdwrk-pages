import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ActionableFeedbackPolicyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyActionableFeedbackPolicyProps extends ActionableFeedbackPolicyPropertyInput, GeneratedPropertyUiProps<ActionableFeedbackPolicyPropertyInput> {}

export function SchemaPropertyActionableFeedbackPolicy({ value: legacyValue, description = "For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyActionableFeedbackPolicyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyActionableFeedbackPolicy as typeof SchemaPropertyActionableFeedbackPolicy & { toStructuredData: (props: SchemaPropertyActionableFeedbackPolicyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
