import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReturnPolicyCategoryPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReturnPolicyCategoryProps extends ReturnPolicyCategoryPropertyInput, GeneratedPropertyUiProps<ReturnPolicyCategoryPropertyInput> {}

export function SchemaPropertyReturnPolicyCategory({ value: legacyValue, description = "Specifies an applicable return policy (from an enumeration).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReturnPolicyCategoryProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReturnPolicyCategoryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-return-policy-category",
    shellClassName: "lander-semantic--schema-property-return-policy-category",
    title: "returnPolicyCategory",
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

(SchemaPropertyReturnPolicyCategory as typeof SchemaPropertyReturnPolicyCategory & { toStructuredData: (props: SchemaPropertyReturnPolicyCategoryProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
