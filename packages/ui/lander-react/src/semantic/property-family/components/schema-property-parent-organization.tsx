import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ParentOrganizationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyParentOrganizationProps extends ParentOrganizationPropertyInput, GeneratedPropertyUiProps<ParentOrganizationPropertyInput> {}

export function SchemaPropertyParentOrganization({ value: legacyValue, description = "The larger organization that this organization is a [[subOrganization]] of, if any.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyParentOrganizationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyParentOrganization as typeof SchemaPropertyParentOrganization & { toStructuredData: (props: SchemaPropertyParentOrganizationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
