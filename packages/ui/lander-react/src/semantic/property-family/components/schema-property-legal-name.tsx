import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLegalNameProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLegalName({ value, description = "The official name of the organization, e.g. the registered company name.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLegalNameProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LegalNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-legal-name",
    shellClassName: "lander-semantic--schema-property-legal-name",
    title: "legalName",
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
