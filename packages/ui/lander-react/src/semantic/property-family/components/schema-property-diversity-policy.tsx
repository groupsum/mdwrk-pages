import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DiversityPolicyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDiversityPolicyProps extends DiversityPolicyPropertyInput, GeneratedPropertyUiProps<DiversityPolicyPropertyInput> {}

export function SchemaPropertyDiversityPolicy({ value: legacyValue, description = "Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDiversityPolicyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
