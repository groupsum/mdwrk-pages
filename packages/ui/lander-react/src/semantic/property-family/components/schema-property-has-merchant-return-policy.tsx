import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasMerchantReturnPolicyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasMerchantReturnPolicyProps extends HasMerchantReturnPolicyPropertyInput, GeneratedPropertyUiProps<HasMerchantReturnPolicyPropertyInput> {}

export function SchemaPropertyHasMerchantReturnPolicy({ value: legacyValue, description = "Specifies a MerchantReturnPolicy that may be applicable.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasMerchantReturnPolicyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasMerchantReturnPolicyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-merchant-return-policy",
    shellClassName: "lander-semantic--schema-property-has-merchant-return-policy",
    title: "hasMerchantReturnPolicy",
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
