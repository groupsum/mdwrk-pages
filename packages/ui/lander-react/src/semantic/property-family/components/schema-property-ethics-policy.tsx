import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEthicsPolicyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEthicsPolicy({ value, description = "Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEthicsPolicyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EthicsPolicyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-ethics-policy",
    shellClassName: "lander-semantic--schema-property-ethics-policy",
    title: "ethicsPolicy",
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
