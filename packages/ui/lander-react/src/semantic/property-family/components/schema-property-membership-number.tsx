import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMembershipNumberProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMembershipNumber({ value, description = "A unique identifier for the membership.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMembershipNumberProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MembershipNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-membership-number",
    shellClassName: "lander-semantic--schema-property-membership-number",
    title: "membershipNumber",
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
