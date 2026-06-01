import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasMerchantReturnPolicyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasMerchantReturnPolicy({ value, description = "Specifies a MerchantReturnPolicy that may be applicable.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasMerchantReturnPolicyProps) {
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
