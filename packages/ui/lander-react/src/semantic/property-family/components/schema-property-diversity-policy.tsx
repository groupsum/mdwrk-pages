import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDiversityPolicyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDiversityPolicy({ value, description = "Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDiversityPolicyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DiversityPolicyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-diversity-policy",
    shellClassName: "lander-semantic--schema-property-diversity-policy",
    title: "diversityPolicy",
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
