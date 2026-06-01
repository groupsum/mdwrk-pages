import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReturnPolicyCategoryProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReturnPolicyCategory({ value, description = "Specifies an applicable return policy (from an enumeration).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReturnPolicyCategoryProps) {
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
