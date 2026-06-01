import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTermsOfServiceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTermsOfService({ value, description = "Human-readable terms of service documentation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTermsOfServiceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TermsOfServicePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-terms-of-service",
    shellClassName: "lander-semantic--schema-property-terms-of-service",
    title: "termsOfService",
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
