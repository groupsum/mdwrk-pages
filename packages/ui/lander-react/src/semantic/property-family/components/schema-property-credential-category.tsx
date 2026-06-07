import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CredentialCategoryPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCredentialCategoryProps extends CredentialCategoryPropertyInput, GeneratedPropertyUiProps<CredentialCategoryPropertyInput> {}

export function SchemaPropertyCredentialCategory({ value: legacyValue, description = "The category or type of credential being described, for example \"degree”, “certificate”, “badge”, or more specific term.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCredentialCategoryProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyCredentialCategory as typeof SchemaPropertyCredentialCategory & { toStructuredData: (props: SchemaPropertyCredentialCategoryProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
