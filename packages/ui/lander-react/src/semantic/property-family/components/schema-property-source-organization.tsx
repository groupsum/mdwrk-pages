import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySourceOrganizationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySourceOrganization({ value, description = "The Organization on whose behalf the creator was working.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySourceOrganizationProps) {
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
