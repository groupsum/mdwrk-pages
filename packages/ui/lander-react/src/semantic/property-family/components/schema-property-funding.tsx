import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FundingPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFundingProps extends FundingPropertyInput, GeneratedPropertyUiProps<FundingPropertyInput> {}

export function SchemaPropertyFunding({ value: legacyValue, description = "A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFundingProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FundingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-funding",
    shellClassName: "lander-semantic--schema-property-funding",
    title: "funding",
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
