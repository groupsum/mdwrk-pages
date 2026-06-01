import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { OwnershipFundingInfoPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOwnershipFundingInfoProps extends OwnershipFundingInfoPropertyInput, GeneratedPropertyUiProps<OwnershipFundingInfoPropertyInput> {}

export function SchemaPropertyOwnershipFundingInfo({ value: legacyValue, description = "For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyOwnershipFundingInfoProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OwnershipFundingInfoPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-ownership-funding-info",
    shellClassName: "lander-semantic--schema-property-ownership-funding-info",
    title: "ownershipFundingInfo",
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
