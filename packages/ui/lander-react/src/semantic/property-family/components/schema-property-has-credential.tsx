import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasCredentialProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasCredential({ value, description = "A credential awarded to the Person or Organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasCredentialProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasCredentialPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-credential",
    shellClassName: "lander-semantic--schema-property-has-credential",
    title: "hasCredential",
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
