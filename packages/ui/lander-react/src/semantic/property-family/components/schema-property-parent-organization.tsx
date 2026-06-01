import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyParentOrganizationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyParentOrganization({ value, description = "The larger organization that this organization is a [[subOrganization]] of, if any.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyParentOrganizationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ParentOrganizationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-parent-organization",
    shellClassName: "lander-semantic--schema-property-parent-organization",
    title: "parentOrganization",
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
