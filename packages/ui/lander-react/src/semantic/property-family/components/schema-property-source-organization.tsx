import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SourceOrganizationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySourceOrganizationProps extends SourceOrganizationPropertyInput, GeneratedPropertyUiProps<SourceOrganizationPropertyInput> {}

export function SchemaPropertySourceOrganization({ value: legacyValue, description = "The Organization on whose behalf the creator was working.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySourceOrganizationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SourceOrganizationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-source-organization",
    shellClassName: "lander-semantic--schema-property-source-organization",
    title: "sourceOrganization",
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
