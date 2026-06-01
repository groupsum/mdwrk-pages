import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCredentialCategoryProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCredentialCategory({ value, description = "The category or type of credential being described, for example \"degree”, “certificate”, “badge”, or more specific term.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCredentialCategoryProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CredentialCategoryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-credential-category",
    shellClassName: "lander-semantic--schema-property-credential-category",
    title: "credentialCategory",
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
