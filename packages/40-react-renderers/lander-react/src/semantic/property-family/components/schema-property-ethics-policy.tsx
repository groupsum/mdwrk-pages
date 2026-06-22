import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EthicsPolicyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEthicsPolicyProps extends EthicsPolicyPropertyInput, GeneratedPropertyUiProps<EthicsPolicyPropertyInput> {}

export function SchemaPropertyEthicsPolicy({ value: legacyValue, description = "Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEthicsPolicyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyEthicsPolicy as typeof SchemaPropertyEthicsPolicy & { toStructuredData: (props: SchemaPropertyEthicsPolicyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
