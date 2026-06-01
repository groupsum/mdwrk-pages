import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReturnPolicySeasonalOverrideProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReturnPolicySeasonalOverride({ value, description = "Seasonal override of a return policy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReturnPolicySeasonalOverrideProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReturnPolicySeasonalOverridePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-return-policy-seasonal-override",
    shellClassName: "lander-semantic--schema-property-return-policy-seasonal-override",
    title: "returnPolicySeasonalOverride",
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
